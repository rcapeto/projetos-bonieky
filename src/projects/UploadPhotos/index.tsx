import { FormEvent, FunctionComponent, useEffect, useState } from 'react';

import { Container, Area, Header, UploadArea, PhotosList, ScreenWarning } from './App.styles';
import { Photo } from './types';
import * as PhotoService from './services/photos';
import { PhotoComponent } from './components/Photo';

export const UploadPhotos: FunctionComponent = () => {
   document.title = 'Galeria de Fotos';

   const [loading, setLoading] = useState(false);
   const [photos, setPhotos] = useState<Photo[]>([]);
   const [uploading, setUploading] = useState(false);

   const loadAllPhotos = async () => {
      setLoading(true);
      setPhotos(await PhotoService.getAll());
      setLoading(false);
   };

   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const file = formData.get('image') as File;

      if(file && file.size > 0) {
         setUploading(true);
         try {
            const result = await PhotoService.insert(file);
            
            if(!(result instanceof Error)) {
               setPhotos([...photos, result]);
            }

         } catch(err) {
            console.error({
               err,
               message: 'Error'
            });
         } finally {
            setUploading(false);
         }
        
      }
   };

   useEffect(() => {
      loadAllPhotos();
   }, []);

   return(
      <Container>
         <Area>
            <Header>Galeria de Fotos</Header>

            <UploadArea onSubmit={handleSubmit}>
               <input type="file" name="image" />
               <button type="submit">Enviar</button>
               {uploading && <p>Enviando...</p>}
            </UploadArea>

            {
               loading && 
               <ScreenWarning>
                  <div className="emoji">✋</div>
                  <div>Carregando...</div>
               </ScreenWarning>
            }

            {
               !loading && photos.length > 0 && (
                  <PhotosList>
                     {
                        photos.map((photo, index) => <PhotoComponent key={String(index)} {...photo}/>)
                     }
                  </PhotosList>
               )
            }

            {
               !loading && !photos.length && (
                  <ScreenWarning>
                     <div className="emoji">😔</div>
                     <div>Não há fotos cadastradas!</div>
                  </ScreenWarning>
               )
            }
         </Area>
      </Container>
   );
};