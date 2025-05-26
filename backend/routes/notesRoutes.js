import express from 'express';
import { deleteMthod, getMthod, postMthod, putMthod, getidMethod } from '../controllers/notesControllers.js';

const router = express.Router();
 

router.get('/', getMthod);
router.get('/:id',getidMethod)
router.post('/', postMthod);
router.put('/:id', putMthod);
router.delete('/:id', deleteMthod);

export default router