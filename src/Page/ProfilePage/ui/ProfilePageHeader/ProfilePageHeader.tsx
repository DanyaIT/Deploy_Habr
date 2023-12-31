import { FC, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ProfilePageHeader.module.scss'
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { getProfileData, getProfileReadonly, profileAction, updateProfileData } from '../../index';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'app/providers/StoreProvider';
import { getUserAuthData } from 'entities/User';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = ({ className }) => {
    const readOnly = useSelector(getProfileReadonly)
    const { t } = useTranslation('profile')
    const dispatch = useAppDispatch()
    const authData = useSelector(getUserAuthData)
    const profileData = useSelector(getProfileData)
    const canEdit = authData?.id === profileData?.id

    const onEdit = useCallback(() => {
        dispatch(profileAction.setReadonly(false))
    }, [dispatch])

    const onCancelForm = useCallback(() => {
        dispatch(profileAction.resetProfile())
    }, [dispatch])

    
    const onSaveForm = useCallback(() => {
        dispatch(updateProfileData())
    }, [dispatch])


    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('Профиль') as string}></Text>
            {canEdit && (
                <div className={cls.BtnWrapper}>
                {readOnly?
                    (<Button
                        className={cls.btn}
                        theme={ThemeButton.OUTLINE}
                        onClick={onEdit}
                    >{t("Редактировать")}
                    </Button>)
                    : (<>
                        <Button
                            className={cls.Btn}
                            theme={ThemeButton.OUTLINE_RED}
                            onClick={onCancelForm}
                        >
                            {t("Отменить")}</Button>
                        <Button
                            className={cls.Savebtn}
                            theme={ThemeButton.OUTLINE}
                            onClick={onSaveForm}
                        >
                            {t("Сохранить")}</Button>
                     </>)
                }
                </div>
            )}

        </div>

    )
}