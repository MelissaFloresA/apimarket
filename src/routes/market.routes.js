import Router from 'express'
import { 
  getUsuarios, 
  getUsuario, 
  getProductos, 
  postProductos, 
  putProductos,
  deleteProductos,
  getProductosId,
  // 👇 importar también controladores de clientes
  getClientes,
  getClienteId,
  postClientes,
  putClientes,
  deleteClientes
} from '../controllers/market.controllers.js';

const router = Router();

// ================== USUARIOS ==================
router.get('/usuarios', getUsuarios);
router.post('/usuarios/login', getUsuario);

// ================== PRODUCTOS ==================
router.get('/productos', getProductos);
router.get('/productos/:id', getProductosId);
router.post('/productos', postProductos);
router.put('/productos/:id', putProductos);
router.delete('/productos/:id', deleteProductos);

// ================== CLIENTES ==================
router.get('/clientes', getClientes);          // Todos los clientes
router.get('/clientes/:id', getClienteId);     // Cliente por ID
router.post('/clientes', postClientes);        // Insertar cliente
router.put('/clientes/:id', putClientes);      // Actualizar cliente
router.delete('/clientes/:id', deleteClientes);// Eliminar cliente

export default router;
