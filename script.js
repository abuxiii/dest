function func([name, surname, department, position, salary]) {
    console.log(name, surname, department, position, salary);
  }
  
  func(data);

  

  function func([name, surname, department, position = 'Junior']) {
    console.log(name, surname, department, position);
  }
  
  func(data);

  

  function func([name, surname, department, position = 'Junior']) {
    console.log(name, surname, department, position);
  }
  
  func(data);
  
  

const data = {
  color: 'red',
  width: 400,
  height: 500
};

function func({ color, width, height }) {
  console.log(color, width, height);
}

func(data);