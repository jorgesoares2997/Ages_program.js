function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano= document.getElementById('txtano')
    var res = document.getElementById('res')
    var nome = document.getElementById('nome')
        if (fano.value.length == 0 || fano.value > ano){
            window.alert(`[ERROR] Check the answers and try again!`)

        }else{
            var fsex = document.getElementsByName('radsex')
            var idade = ano - Number(fano.value) 
            var genero = ''
            var img = document.createElement('img')
            var name = String(nome.value)
            img.setAttribute ('id', 'foto')
            //man
            if (fsex[0].checked){
            genero = 'Man'
                if (idade >= 0 && idade < 2){
                    //baby
                    img.setAttribute('src','fotos/bebemenino.png')
                
                }else if (idade <= 4){
                    //young child
                    img.setAttribute('src', 'fotos/youngchild.png')
                
                }else if ( idade <= 12){
                    //child
                    img.setAttribute('src', 'fotos/criancamenino.png')
                
                }else if(idade <= 17){
                    //adolescent
                    img.setAttribute('src', 'fotos/adolescentemenino.png')
                
                }else if (idade <=27){
                    //young adult
                    img.setAttribute('src', 'fotos/jovemgaroto.png')
                
                }else if (idade <= 39){
                    //adult
                    img.setAttribute('src', 'fotos/homemadulto.png')
                
                }else if(idade <=59){
                    //old man
                    img.setAttribute('src', 'fotos/idoso.png')

                }else if (idade<= 100){
                    //sage
                    img.setAttribute('src', 'fotos/sabio.png')
            
                }else{
                    img.setAttribute('src', 'fotos/sabio.png')
            
                }
            //woman
            } else if (fsex[1].checked){
                genero = 'Woman' 
                if (idade >= 0 && idade < 2){
                //baby
                img.setAttribute('src','fotos/bebemenina.png')
                
            }else if (idade <= 4){
                //young child
                img.setAttribute('src', 'fotos/youngchildf.png')
            
            }else if ( idade <= 12){
                //child
                img.setAttribute('src', 'fotos/criancamenina.png')
            
            }else if(idade <= 17){
                //adolescent
                img.setAttribute('src', 'fotos/adolescentemenina.png')
            
            }else if (idade <=27){
                //young adult
                img.setAttribute('src', 'fotos/jovemmoca.png')
            
            }else if (idade <= 39){
                //adult
                img.setAttribute('src', 'fotos/mulheradulta.png')
            
            }   
            else if(idade <=59){
                //old woman
                img.setAttribute('src', 'fotos/idosa.png')

            }else if (idade<= 100){
                //sage
                img.setAttribute('src', 'fotos/sabia.png')
            
            }else{
                img.setAttribute('src', 'fotos/sabia.png')
            
            }

        }
            res.style.textAlign = 'center'
            res.innerHTML = `${name}, you're a ${genero} with ${idade} year's old.`
            res.appendChild(img)

    }

}