import {Book} from './Book';
import {CategoryBooks} from './CategoryBooks';

const fiction_books: Book[] = [
  // {
  //   title: 'The Gaurdian',
  //   author: 'Nicholas Sparks',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tellus tortor, consectetur ut semper at.',
  //   imageurl: 'https://images.gr-assets.com/books/1500552983l/26114135.jpg'
  // },
  // {
  //   title: 'Small Great Things: A Novel',
  //   author: 'Jodi Picoult',
  //   imageurl: 'https://images.gr-assets.com/books/1500552983l/26114135.jpg',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tellus tortor, consectetur ut semper at.'},
  // {
  //   title: 'All the Light We Cannot See',
  //   author: 'Anthony Doerr',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tellus tortor, consectetur ut semper at.',
  //   imageurl: 'https://images.gr-assets.com/books/1500552983l/26114135.jpg'
  // },
  // {
  //   title: 'See Me',
  //   author: 'Nicholas Sparks',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tellus tortor, consectetur ut semper at.',
  //   imageurl: 'https://images.gr-assets.com/books/1500552983l/26114135.jpg'
  // }
];

export const CATEGORIES: string[] = ['Fiction', 'History', 'Biographies & Memoirs'];
export const CATEGORY_BOOKS = {
  'Fiction': fiction_books,
  'History': [],
  'Biographies & Memoirs': []
};
