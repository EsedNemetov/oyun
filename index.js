const siyahi = ["kagiz.png" , "das.png" , "qayci.png"]

//DOM-Document Object Modul

const el = document.getElementById('el')
const das = document.getElementById('das')
const qayci = document.getElementById('qayci')
const komputerinSecimi = document.getElementById('komputer')
const neticeniYaz = document.getElementById('netice')

//clickleme hadisesi burda olunur

el.onclick = seciminiEle
das.onclick = seciminiEle
qayci.onclick = seciminiEle

function seciminiEle(){
    const komputer = randomSecim()
    const menimSecimim = this.dataset.id 


    if(menimSecimim==0 && komputer ==0){
        netice = 'Yeniden cehd ele'
    }

    else if(menimSecimim ==0 && komputer ==1){
        netice = 'Qazandiniz'
    }
    else if(menimSecimim == 0 && komputer ==2){
        netice = 'Meglub oldunuz'
    }
    else if(menimSecimim ==1 && komputer == 0){
        netice = 'Qazandiniz'
    }
    else if(menimSecimim ==1 && komputer ==1){
        netice ='Yeniden cehd ele'
    }
    else if(menimSecimim ==1 && komputer ==2){
        netice = 'Meglub oldunuz'
    }
    else if(menimSecimim == 2 && komputer ==0){
        netice ='Meglub oldunuz'
    }
    else if(menimSecimim ==2 && komputer==1){
        netice = 'Qazandiniz'
    }
    else {
            netice = 'Yeniden cehd ele'
        }

    neticeniYaz.innerHTML = netice
    }



function randomSecim(){
    const say = Math.round(Math.random()*2)
    komputerinSecimi.src = `img/${siyahi[say]}`   
    return say
}