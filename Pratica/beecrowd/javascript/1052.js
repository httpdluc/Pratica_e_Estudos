class Main{
  static execute(){
    const valores = [{
      id:1,
      mes:'January'
    },{id:2,
      mes:'February'
    },{id:3,
      mes:'March'
    },{id:4,
      mes:'April'
    },{id:5,
      mes:'May'
    },{id:6,
      mes:'June'
    },{id:7,
      mes:'July'
    },{id:8,
      mes:'August'
    },{id:9,
      mes:'September'
    },{id:10,
      mes:'October'
    },{id:11,
      mes:'November'
    },{id:12,
      mes:'December'
    }]
    const entrada = Number(lines[0])

    const res = valores.find(valor => valor.id === entrada)

    console.log(res.mes)
  }
}

Main.execute()