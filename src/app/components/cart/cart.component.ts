import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  item: any;
  data: any = [];
  constructor(
    private localStorageService: LocalStorageService,
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.data = this.localStorageService.getItem('cart');
  }

  modifyQuantity(title: string, event: number) {
    for(let i = 0; i < this.data.length; i++) {
      if(title === this.data[i].title) {
        this.data[i].quantity = event;
      }
    }
    this.localStorageService.setItem('cart', this.data);
    this.getData();
  }

  deleteItem(title: any) {
    const removeItem = { title: title };
    let data = this.data
    data = data.filter( (ob: any) => ob.title !== removeItem.title);
    this.localStorageService.setItem('cart', data);
    this.getData();
  }

  exportToXLS(): void {
    // Generar el contenido XLS
    let xlsContent = 'data:text/xls;charset=utf-8,Nombre\tCantidad\tPrecio\tImagen\n';
    this.data.forEach((obj: any) => {
      xlsContent += `${obj.title}\t${obj.quantity}\t${obj.cost}\t${obj.image}\n`;
    });

    // Crear un enlace temporal
    const link = document.createElement('a');
    link.setAttribute('href', encodeURI(xlsContent));
    link.setAttribute('download', 'archivo.xls');

    // Simular el clic en el enlace para iniciar la descarga
    link.click();
  }


}
