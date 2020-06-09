import React  from 'react';

import { Loading } from '../../components';

import CategoryItem from './CategoryItem';

import './Categories.scss';

export default function Categories   ({ data, isLoading, url }) {
    return(
    <div className="categories" data-testid="categories">
        <div className='container'>
            <h3 className="categories__title">Categorias</h3>

            {
                isLoading ? 
                    <Loading text='Carregando...'/> 
                 :
                    <div className="categories__content">
                       {data && data.map(item =>(
                           <CategoryItem
                                key={item.id}
                                icon={item.icons[0]}
                                id={item.id}
                                name={item.name}
                                url={url}
                           />
                       ))}
                    </div>

            }
            

        </div>

    </div>
    );
} 


