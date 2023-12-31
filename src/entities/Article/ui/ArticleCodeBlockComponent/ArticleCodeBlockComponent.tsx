import { FC, memo} from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleCodeBlockComponent.module.scss';
import { ArticleCodeBlock } from 'entities/Article/model/types/article';
import { Code } from 'shared/ui/Code/Code';

interface ArticleCodeComponentProps {
   className?: string;
   block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent: FC<ArticleCodeComponentProps> = memo((props) => {
   const { className, block } = props;


   return (
      <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
         <Code text = {block.code}/>
      </div>
   );
})