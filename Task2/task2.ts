interface ObjectShape {
    id: number;
    name: string;
    age: number;
  }
  
  function updateObjectInArray<T extends ObjectShape>(
    initialArray: T[],
    key: keyof T,
    value: T[keyof T],
    patch: Partial<T>
  ) {
    return initialArray.map((item) => {
        if(item[key] == value){
            return {...item, ...patch};
        }
        return item;
    });
  }

  const initialArray: ObjectShape[] = [
    { id: 1, name: "Alice", age: 33 },
    { id: 2, name: "Bob", age: 35 },
    { id: 3, name: "Max", age: 42 }
  ];
  
  const updatedArray = updateObjectInArray<ObjectShape>(initialArray, "id", 2, { name: 'Yaroslav', age: 22 });
  console.log(initialArray);
  console.log(updatedArray);