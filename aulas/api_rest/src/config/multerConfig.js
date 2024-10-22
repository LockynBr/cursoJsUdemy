import multer from 'multer';
import { extname, resolve } from 'path';

const rand = () => Math.floor(Math.random() * 1000 + 1000);

export default {
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, resolve(__dirname, '..', '..', 'uploads'));
    },
    filename: (req, file, callback) => {
      callback(null, `${Date.now()}_${rand()}${extname(file.originalname)}`);
    },
  }),
};
