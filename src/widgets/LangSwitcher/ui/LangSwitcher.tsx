import { useTranslation } from 'react-i18next'
import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import cls from './LangSwitcher.module.scss'

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

const LangSwitcher: FC<LangSwitcherProps> = memo(({ className, short }) => {
  const { t, i18n } = useTranslation()
  const toggle = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }
  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(cls.LangSwitcher, {}, [className || ''])}
      onClick={toggle}
    >
      {t(short ? 'Короткий язык':'Язык')}
    </Button>
  )
})

export default LangSwitcher
