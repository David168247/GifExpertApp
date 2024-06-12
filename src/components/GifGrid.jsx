import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ({category}) => {

  const { images ,isLoanding } = useFetchGifs( {category} );
  console.log(isLoanding);

  return (
    <>
        <h3>{ category }</h3>
        {
          isLoanding && (<h2>Cagando...</h2>)
        }
        <div className="card-grid">
             
          {
            images.map( ({ id , title, url }) =>  (
                    < GifItem
                      key= { id }
                      title={ title }
                      url={url}
                    />
            ))
          }

        </div>
        
    </>
  )
}
