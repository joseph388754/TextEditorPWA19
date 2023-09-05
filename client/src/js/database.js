import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (id, content) => {
  const jatedb = await openDB('jate', 1);
  const tx = jatedb.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const req = store.put({id: id, content: content});
  const res = await req;
  console.log('Data saved', res);
};
  

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () =>{
  const indexedDb = await openDB('jate', 1);
  const tx = indexedDb.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const req = store.get(1);
  const res = await req;
  console.log('Data retrieved', res);
  return res?.value;
};

initdb();
