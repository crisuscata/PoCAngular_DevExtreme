import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



export class Product {
  ID: number;
  Name: string;
  Price: number;
  Current_Inventory: number;
  Backorder: number;
  Manufacturing: number;
  Category: string;
  ImageSrc: string;
}

export class Customer {
  ID: number;
  CompanyName: string;
  Address: string;
  City: string;
  State: string;
  Zipcode: number;
  Phone: string;
  Fax: string;
  Website: string;
}

export class Todo {
  userId: number;
  id: string;
  title: string;
  completed: string;
}

export class User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  birthDate: string
}

export class DataSource {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  birthDate: string
}


const products: Product[] = [{
  ID: 1,
  Name: 'HD Video Player',
  Price: 330,
  Current_Inventory: 225,
  Backorder: 0,
  Manufacturing: 10,
  Category: 'Video Players',
  ImageSrc: 'images/products/1-small.png',
}, {
  ID: 2,
  Name: 'SuperHD Player',
  Price: 400,
  Current_Inventory: 150,
  Backorder: 0,
  Manufacturing: 25,
  Category: 'Video Players',
  ImageSrc: 'images/products/2-small.png',
}, {
  ID: 3,
  Name: 'SuperPlasma 50',
  Price: 2400,
  Current_Inventory: 0,
  Backorder: 0,
  Manufacturing: 0,
  Category: 'Televisions',
  ImageSrc: 'images/products/3-small.png',
}, {
  ID: 4,
  Name: 'SuperLED 50',
  Price: 1600,
  Current_Inventory: 77,
  Backorder: 0,
  Manufacturing: 55,
  Category: 'Televisions',
  ImageSrc: 'images/products/4-small.png',
}, {
  ID: 5,
  Name: 'SuperLED 42',
  Price: 1450,
  Current_Inventory: 445,
  Backorder: 0,
  Manufacturing: 0,
  Category: 'Televisions',
  ImageSrc: 'images/products/5-small.png',
}, {
  ID: 6,
  Name: 'SuperLCD 55',
  Price: 1350,
  Current_Inventory: 345,
  Backorder: 0,
  Manufacturing: 5,
  Category: 'Televisions',
  ImageSrc: 'images/products/6-small.png',
}, {
  ID: 7,
  Name: 'SuperLCD 42',
  Price: 1200,
  Current_Inventory: 210,
  Backorder: 0,
  Manufacturing: 20,
  Category: 'Televisions',
  ImageSrc: 'images/products/7-small.png',
}, {
  ID: 8,
  Name: 'SuperPlasma 65',
  Price: 3500,
  Current_Inventory: 0,
  Backorder: 0,
  Manufacturing: 0,
  Category: 'Televisions',
  ImageSrc: 'images/products/8-small.png',
}, {
  ID: 9,
  Name: 'SuperLCD 70',
  Price: 4000,
  Current_Inventory: 95,
  Backorder: 0,
  Manufacturing: 5,
  Category: 'Televisions',
  ImageSrc: 'images/products/9-small.png',
}, {
  ID: 10,
  Name: 'DesktopLED 21',
  Price: 175,
  Current_Inventory: 0,
  Backorder: 425,
  Manufacturing: 75,
  Category: 'Monitors',
  ImageSrc: 'images/products/10-small.png',
}, {
  ID: 11,
  Name: 'DesktopLED 19',
  Price: 165,
  Current_Inventory: 425,
  Backorder: 0,
  Manufacturing: 110,
  Category: 'Monitors',
  ImageSrc: 'images/products/11-small.png',
}, {
  ID: 12,
  Name: 'DesktopLCD 21',
  Price: 170,
  Current_Inventory: 210,
  Backorder: 0,
  Manufacturing: 60,
  Category: 'Monitors',
  ImageSrc: 'images/products/12-small.png',
}, {
  ID: 13,
  Name: 'DesktopLCD 19',
  Price: 160,
  Current_Inventory: 150,
  Backorder: 0,
  Manufacturing: 210,
  Category: 'Monitors',
  ImageSrc: 'images/products/13-small.png',
}, {
  ID: 14,
  Name: 'Projector Plus',
  Price: 550,
  Current_Inventory: 0,
  Backorder: 55,
  Manufacturing: 10,
  Category: 'Projectors',
  ImageSrc: 'images/products/14-small.png',
}, {
  ID: 15,
  Name: 'Projector PlusHD',
  Price: 750,
  Current_Inventory: 110,
  Backorder: 0,
  Manufacturing: 90,
  Category: 'Projectors',
  ImageSrc: 'images/products/15-small.png',
}, {
  ID: 16,
  Name: 'Projector PlusHT',
  Price: 1050,
  Current_Inventory: 0,
  Backorder: 75,
  Manufacturing: 57,
  Category: 'Projectors',
  ImageSrc: 'images/products/16-small.png',
}, {
  ID: 17,
  Name: 'ExcelRemote IR',
  Price: 150,
  Current_Inventory: 650,
  Backorder: 0,
  Manufacturing: 190,
  Category: 'Automation',
  ImageSrc: 'images/products/17-small.png',
}, {
  ID: 18,
  Name: 'ExcelRemote BT',
  Price: 180,
  Current_Inventory: 310,
  Backorder: 0,
  Manufacturing: 0,
  Category: 'Automation',
  ImageSrc: 'images/products/18-small.png',
}, {
  ID: 19,
  Name: 'ExcelRemote IP',
  Price: 200,
  Current_Inventory: 0,
  Backorder: 325,
  Manufacturing: 225,
  Category: 'Automation',
  ImageSrc: 'images/products/19-small.png',
}];

const customers: Customer[] = [{
  ID: 1,
  CompanyName: 'Super Mart of the West',
  Address: '702 SW 8th Street',
  City: 'Bentonville',
  State: 'Arkansas',
  Zipcode: 72716,
  Phone: '(800) 555-2797',
  Fax: '(800) 555-2171',
  Website: 'http://www.nowebsitesupermart.com',
}, {
  ID: 2,
  CompanyName: 'Electronics Depot',
  Address: '2455 Paces Ferry Road NW',
  City: 'Atlanta',
  State: 'Georgia',
  Zipcode: 30339,
  Phone: '(800) 595-3232',
  Fax: '(800) 595-3231',
  Website: 'http://www.nowebsitedepot.com',
}, {
  ID: 3,
  CompanyName: 'K&S Music',
  Address: '1000 Nicllet Mall',
  City: 'Minneapolis',
  State: 'Minnesota',
  Zipcode: 55403,
  Phone: '(612) 304-6073',
  Fax: '(612) 304-6074',
  Website: 'http://www.nowebsitemusic.com',
}, {
  ID: 4,
  CompanyName: "Tom's Club",
  Address: '999 Lake Drive',
  City: 'Issaquah',
  State: 'Washington',
  Zipcode: 98027,
  Phone: '(800) 955-2292',
  Fax: '(800) 955-2293',
  Website: 'http://www.nowebsitetomsclub.com',
}, {
  ID: 5,
  CompanyName: 'E-Mart',
  Address: '3333 Beverly Rd',
  City: 'Hoffman Estates',
  State: 'Illinois',
  Zipcode: 60179,
  Phone: '(847) 286-2500',
  Fax: '(847) 286-2501',
  Website: 'http://www.nowebsiteemart.com',
}, {
  ID: 6,
  CompanyName: 'Walters',
  Address: '200 Wilmot Rd',
  City: 'Deerfield',
  State: 'Illinois',
  Zipcode: 60015,
  Phone: '(847) 940-2500',
  Fax: '(847) 940-2501',
  Website: 'http://www.nowebsitewalters.com',
}, {
  ID: 7,
  CompanyName: 'StereoShack',
  Address: '400 Commerce S',
  City: 'Fort Worth',
  State: 'Texas',
  Zipcode: 76102,
  Phone: '(817) 820-0741',
  Fax: '(817) 820-0742',
  Website: 'http://www.nowebsiteshack.com',
}, {
  ID: 8,
  CompanyName: 'Circuit Town',
  Address: '2200 Kensington Court',
  City: 'Oak Brook',
  State: 'Illinois',
  Zipcode: 60523,
  Phone: '(800) 955-2929',
  Fax: '(800) 955-9392',
  Website: 'http://www.nowebsitecircuittown.com',
}, {
  ID: 9,
  CompanyName: 'Premier Buy',
  Address: '7601 Penn Avenue South',
  City: 'Richfield',
  State: 'Minnesota',
  Zipcode: 55423,
  Phone: '(612) 291-1000',
  Fax: '(612) 291-2001',
  Website: 'http://www.nowebsitepremierbuy.com',
}, {
  ID: 10,
  CompanyName: 'ElectrixMax',
  Address: '263 Shuman Blvd',
  City: 'Naperville',
  State: 'Illinois',
  Zipcode: 60563,
  Phone: '(630) 438-7800',
  Fax: '(630) 438-7801',
  Website: 'http://www.nowebsiteelectrixmax.com',
}, {
  ID: 11,
  CompanyName: 'Video Emporium',
  Address: '1201 Elm Street',
  City: 'Dallas',
  State: 'Texas',
  Zipcode: 75270,
  Phone: '(214) 854-3000',
  Fax: '(214) 854-3001',
  Website: 'http://www.nowebsitevideoemporium.com',
}, {
  ID: 12,
  CompanyName: 'Screen Shop',
  Address: '1000 Lowes Blvd',
  City: 'Mooresville',
  State: 'North Carolina',
  Zipcode: 28117,
  Phone: '(800) 445-6937',
  Fax: '(800) 445-6938',
  Website: 'http://www.nowebsitescreenshop.com',
}];



//**************

//@Injectable()
@Injectable({
  providedIn: 'root'
})
export class PocService {

  rootURL = 'https://jsonplaceholder.typicode.com/todos/';
  rootURLUsers = 'https://dummyjson.com/users/';

  static getCustomers(): Customer[] {
    return customers;
  }

  getCustomersProperties(): Customer[] {
    return customers;
  }

  getProducts(): Product[] {
    return products;
  }

  constructor(private http:HttpClient) {}

  public getAll()
  {
    return this.http.get<Todo[]>(this.rootURL);
  }


  public getById(userId: any)
    {
      return this.http.get<Todo>(this.rootURL+"/"+userId);
    }

  public getUserById(id: any)
  {
    return this.http.get<User>(this.rootURLUsers+"/"+id);
  }


}
