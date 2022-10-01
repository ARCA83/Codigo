

const personas=[];

function crearPersona() {
     const persona1 ={
        name:"bruno",
        years: 32,
        gender: "masculino",
        talla:179,
        is_adult: function(){
            return this.year >=18;
        },
        inches:function(){
            return this.talla /2.54;
        },
        upper_name: function (){
            return this.name.toUpperCase();
        },
        captital_name: function (){
            return (this.upper_name(),substring(0,1)+this.name.substring(1, this.name, lenght))
        }
        const persona1 ={
            name:"bruno",
            years: 32,
            gender: "masculino",
            talla:179,
            is_adult: function(){
                return this.year >=18;
            },
            inches:function(){
                return this.talla /2.54;
            },
            upper_name: function (){
                return this.name.toUpperCase();
            },
            captital_name: function (){
                return (this.upper_name(),substring(0,1)+this.name.substring(1, this.name, lenght))
            }
            const persona ={
        name:"bruno",
        years: 32,
        gender: "masculino",
        talla:179,
        is_adult: function(){
            return this.year >=18;
        },
        inches:function(){
            return this.talla /2.54;
        },
        upper_name: function (){
            return this.name.toUpperCase();
        },
        captital_name: function (){
            return (this.upper_name(),substring(0,1)+this.name.substring(1, this.name, lenght))
        }

    
    };

    console.log(persona);

}