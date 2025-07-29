import { Component, inject, signal } from '@angular/core';
import { ProductoService } from '../../../services/producto-service';

interface Column {
  field: string;
  header: string;
  customExportHeader?: string;
}

@Component({
  selector: 'app-nota-venta-component',
  standalone: false,
  templateUrl: './nota-venta-component.html',
  styleUrl: './nota-venta-component.scss'
})
export class NotaVentaComponent {

  selectedAlmacen = signal('');
selectedSucursal = signal(-1);
  sucursales = signal([]);
  almacenes = signal([])
  buscar = signal("")
  products = signal([]);
  totalRecords = signal(0);
  loading = signal(false);
  carrito = signal([
    {nombre: 'TECLADO', precio: 52.99, cantidad: 2},
    {nombre: 'MONITOR', precio: 5852.99, cantidad: 1},
    {nombre: 'ESCRITORIO GAMER', precio: 852.99, cantidad: 1}

  ]);

    cols!: Column[];

  visible = signal(false)

  productoService = inject(ProductoService)


  showDialogCliente(){
    this.visible.set(true);
  }

  funGetAlmacenes(){
    
  }
  
  cargarDatos(event: any){
    let page = event.first / event.rows + 1;

    this.funGetProductos(page, event.rows);
  }

  addCarrito(prod: any){
    this.carrito().push({nombre: prod.nombre, precio: prod.precio_venta_actual, cantidad: 1},)
  }

  funGetProductos(page: number = 1, limit: number = 5){
    this.loading.set(true)
    this.productoService.funListar("1", page, limit, this.buscar()).subscribe(
      (res: any) => {
        this.products.set(res.data);
        this.totalRecords.set(res.total);

        this.loading.set(false);
      }
    )
  }
}
