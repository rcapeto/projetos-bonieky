import { ref, listAll, getDownloadURL, uploadBytes } from 'firebase/storage';
import { v4 as createId } from 'uuid';

import { storage } from '../config/firebase';

import { Photo } from '../types';

export const getAll = async (): Promise<Photo[]> => {
   const allPhotos: Photo[] = [];

   const imagesFolder = ref(storage, 'images');
   const photoList = await listAll(imagesFolder);

   for(const index in photoList.items) {
      const photo_url = await getDownloadURL(photoList.items[index]);

      allPhotos.push({
         name: photoList.items[index].name,
         url: photo_url
      });
   }

   return allPhotos;
};

export const insert = async (file: File): Promise<Photo | Error> => {
   const acceptedFiles = [
      'image/png',
      'image/jpeg',
      'image/jpg'
   ];

   if(acceptedFiles.includes(file.type)) {
      const random_name = createId();
      const file_ref = ref(storage, `images/${random_name}`)
      const upload = await uploadBytes(file_ref, file);
      const photo_url = await getDownloadURL(upload.ref);

      return { name: upload.ref.name, url: photo_url };
   } else {
      return new Error('Tipo de arquivo não permitido');
   }
};