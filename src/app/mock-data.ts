import {Book} from './Book';
import {CategoryBooks} from './CategoryBooks';

const desc: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut ligula sed risus ultricies commodo sed at nisl. Aliquam et imperdiet tortor. Integer libero turpis, dignissim vitae mi vel, bibendum pharetra quam. Ut ullamcorper justo ut felis fermentum, eget dapibus ex posuere. Cras magna tortor, pulvinar et molestie in, condimentum vel metus. Donec vitae imperdiet risus. Nam varius mi vitae arcu ultricies, a bibendum tellus ornare. Vestibulum nec dolor quis elit accumsan laoreet ac ac libero. Proin viverra orci felis, in rutrum leo sollicitudin vel. Sed eget pellentesque libero. Nunc nec felis sit amet diam vestibulum egestas at et orci. Integer vitae ultricies odio, ut ornare tellus. Vivamus in odio pretium, aliquet ipsum id, aliquam ipsum. Nullam porta quam sed velit ultrices volutpat. Proin quis est eu nisi ultrices porttitor. Proin viverra quis diam quis consequat.\n' +
  '\n' +
  'Proin sit amet turpis a metus imperdiet tristique a non ligula. Fusce ac porta magna. Sed nibh ipsum, ornare eget ipsum maximus, volutpat volutpat justo. Nulla facilisi. Mauris sed gravida elit. In dapibus augue eu dui maximus gravida. Quisque et nulla et turpis tincidunt varius et nec mauris. Nullam vulputate venenatis accumsan. In metus massa, varius et nibh et, sagittis pretium tortor. Proin dictum quam non vulputate rutrum. Fusce a bibendum sapien. Duis auctor id velit vel vestibulum.\n' +
  '\n' +
  'Fusce vitae odio aliquet, commodo ex placerat, faucibus leo. Proin tincidunt quis arcu faucibus sollicitudin. Phasellus fringilla, elit vitae vehicula pretium, metus est lobortis mi, at vehicula odio velit nec tellus. Etiam a facilisis ante. Phasellus non turpis ac lacus scelerisque feugiat. Aliquam at quam vel odio suscipit porttitor id nec mauris. Integer venenatis arcu non pretium cursus. Suspendisse eu ligula sit amet lacus maximus auctor eu eget ex. Nullam bibendum placerat tellus sed dignissim. Sed eu arcu scelerisque, viverra mi a, ultricies mauris.\n' +
  '\n' +
  'Proin blandit ornare ipsum in suscipit. Quisque vehicula dolor sit amet magna porta dictum. Vestibulum sit amet urna sit amet turpis vestibulum pharetra ac et augue. Nulla ac ligula vitae diam venenatis pellentesque. Phasellus egestas efficitur orci, ut varius purus facilisis id. Proin sit amet leo viverra, accumsan sapien eget, maximus eros. Sed accumsan sed metus eu cursus.\n' +
  '\n' +
  'Fusce placerat sem nulla, vitae rhoncus sem vehicula eget. Vestibulum a odio non urna faucibus rutrum vitae sit amet urna. Fusce eu mattis odio. Maecenas venenatis arcu ac sapien vulputate blandit. Pellentesque quam turpis, hendrerit sit amet leo id, ornare volutpat enim. Cras cursus tincidunt elit, vitae sollicitudin urna varius nec. Mauris faucibus mi est. Sed id eros eleifend, semper sem ac, auctor risus. Donec nec risus eget velit luctus faucibus in non ante. Cras in sem ac risus consectetur egestas. Sed quis odio facilisis, mattis eros quis, lobortis sapien. Nam vitae blandit justo, sed euismod dolor.';

const fiction_books: Book[] = [
  {
    id: 0,
    title: 'The Gaurdian',
    author: 'Nicholas Sparks',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tellus tortor, consectetur ut semper at.',
    imageurl: 'https://images.gr-assets.com/books/1500552983l/26114135.jpg',
    genre: 'Fiction'
  },
  {
    id: 1,
    title: 'Small Great Things: A Novel',
    author: 'Jodi Picoult',
    imageurl: 'https://images.gr-assets.com/books/1500552983l/26114135.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tellus tortor, consectetur ut semper at.',
    genre: 'Fiction'
  },
  {
    id: 2,
    title: 'All the Light We Cannot See',
    author: 'Anthony Doerr',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tellus tortor, consectetur ut semper at.',
    imageurl: 'https://images.gr-assets.com/books/1500552983l/26114135.jpg',
    genre: 'Fiction'
  },
  {
    id: 3,
    title: 'See Me',
    author: 'Nicholas Sparks',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tellus tortor, consectetur ut semper at.',
    imageurl: 'https://images.gr-assets.com/books/1500552983l/26114135.jpg',
    genre: 'Fiction'
  }
];

export const CATEGORIES: string[] = ['Fiction', 'History', 'Biographies & Memoirs'];
export const CATEGORY_BOOKS = {
  'Fiction': fiction_books,
  'History': [],
  'Biographies & Memoirs': []
};
