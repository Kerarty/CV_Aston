import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

export type Lang = 'ru' | 'en'

/** Текст, существующий в обеих локализациях. */
export type LocalText = {
  ru: string
  en: string
}

type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  /** Выбирает перевод: t('Скачать CV', 'Download CV'). Работает и для массивов/объектов. */
  t: <A, B>(ru: A, en: B) => A
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = 'pz-lang'

function readInitialLang(): Lang {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'en' || stored === 'ru') return stored
  } catch {
    // Storage может быть недоступен — берём язык документа.
  }
  return document.documentElement.lang.startsWith('en') ? 'en' : 'ru'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readInitialLang)

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLang: (next) => {
        setLangState(next)
        try {
          window.localStorage.setItem(STORAGE_KEY, next)
        } catch {
          // Ограничения приватного режима — язык просто не сохранится между сессиями.
        }
      },
      t: <A, B,>(ru: A, en: B) => (lang === 'en' ? (en as unknown as A) : ru),
    }),
    [lang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLang(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within LanguageProvider')
  return ctx
}
