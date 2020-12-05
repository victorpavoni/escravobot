const execute = (bot, msg, args) => {
  const memes = [
    'https://cdn.discordapp.com/attachments/638516073263661076/753932494625177670/Tecnosh_e_aXt_no_puteiro.mp4',
    'https://cdn.discordapp.com/attachments/638515858402181136/754508969661300826/FONES_BLUE.mp4',
    'https://cdn.discordapp.com/attachments/638516073263661076/754429109806825602/9b445ed1e326aa3a865fcc19419eec652122efb83d7fea13bf7622d6daf468cb_1.mp4',
    'https://cdn.discordapp.com/attachments/756209115209924749/784847933610655764/penisvaldo.mp4',
    'https://cdn.discordapp.com/attachments/756209115209924749/784847936755597332/negoney.mp4',
    'https://cdn.discordapp.com/attachments/756209115209924749/784847937360363560/pedroespancado_.mp4',
    'https://cdn.discordapp.com/attachments/756209115209924749/784847938768863232/95f09709d7678326dc8267843b5c8639c8bd0ea7cce3ed09c2fbdf0931b8987b_1.mp4',
    'https://cdn.discordapp.com/attachments/756209115209924749/784847939657924628/Grupo_publico_Non_Sense_Memes_Facebook.mp4',
    'https://cdn.discordapp.com/attachments/756209115209924749/784847940039606342/taporra.mp4',
    'https://cdn.discordapp.com/attachments/756209115209924749/784847939776020530/badido.mp4',
    'https://cdn.discordapp.com/attachments/756209115209924749/784847946260676648/SPOILER_RACISMO.mp4',
    'https://cdn.discordapp.com/attachments/756209115209924749/784847984483237960/pessimous.mp4',
    'https://cdn.discordapp.com/attachments/756209115209924749/784847987369181194/se_eu_fosse_da_loud_quem_eu_seria.mp4',
    'https://cdn.discordapp.com/attachments/756209115209924749/784847989264875540/shitpostdosbaianor3_121265512_118520023186505_6789150917720525666_n.mp4',
    'https://cdn.discordapp.com/attachments/756209115209924749/784847997820731392/121017990_205919044220808_4368062251597334542_n.mp4',
    'https://cdn.discordapp.com/attachments/756209115209924749/784848005302976512/b50fb7cb660d4e1e87a0c01c858d8889.mp4',
    'https://cdn.discordapp.com/attachments/756209115209924749/784847999435014154/Cm8kuKPVObpR6cG1.mp4',
    'https://cdn.discordapp.com/attachments/756209115209924749/784848007199195147/shitpost_do_lixokk_20200913_212056_0.mp4',
    'https://cdn.discordapp.com/attachments/756209115209924749/784848010282270730/Purple_Guy-1-2_1.mp4',
    'https://cdn.discordapp.com/attachments/756209115209924749/784848016473194586/plickbinder.mp4',
    'https://cdn.discordapp.com/attachments/756209115209924749/784848020389888030/Jake_mulher_e_finn_machista__Wtf.mp4',
    'https://cdn.discordapp.com/attachments/756209115209924749/784848026979532850/azulzao_.mp4',
    'https://cdn.discordapp.com/attachments/756209115209924749/784848032608419880/LEO_TRAVA_ZAP_ENTROU_NO_GRUPO_.mp4',
    'https://cdn.discordapp.com/attachments/756209115209924749/784848035179790347/anao_caindo.mp4',
    'https://cdn.discordapp.com/attachments/756209115209924749/784848036525244446/Meu_Video84.mp4',
    'https://cdn.discordapp.com/attachments/756209115209924749/784848040980381756/bem_vindo_ao_gular.mp4',
    'https://cdn.discordapp.com/attachments/756209115209924749/784848044726157342/tartaruga.mp4',
    'https://cdn.discordapp.com/attachments/756209115209924749/784848051474923520/004f92e194a5bdddc11931734ef67d39738d6e1bfc42c13a2296cac760c24ee8_1.mp4',
    'https://cdn.discordapp.com/attachments/756209115209924749/784848050967150663/ticoteco.mp4',
    'https://cdn.discordapp.com/attachments/756209115209924749/784848053420294144/fee6dbc3218bc6f2338a019e98a877cccf65458377e6c81fba37cc45e62be3d8_1.mp4',
    'https://cdn.discordapp.com/attachments/756209115209924749/784848058932264980/trairardi.mp4',
    'https://cdn.discordapp.com/attachments/756209115209924749/784848067954081852/balde.mp4',
    'https://cdn.discordapp.com/attachments/756209115209924749/784848071494205500/KmtT1JP7iKd6CCET.mp4',
    'https://cdn.discordapp.com/attachments/756209115209924749/784848076833685514/8hlVDv8QIUCWuyeG.mp4',
    'https://cdn.discordapp.com/attachments/756209115209924749/784848079853191168/sonaro.mp4',
    'https://cdn.discordapp.com/attachments/756209115209924749/784848085196472391/como_entrar_em_uma_festa.mp4',
    'https://cdn.discordapp.com/attachments/756209115209924749/784848085226487808/banideividson.mp4',
    'https://cdn.discordapp.com/attachments/756209115209924749/784848089235587112/eu_sou_uma_foca.mp4',
    'https://cdn.discordapp.com/attachments/756209115209924749/784848092918448158/finish_him.mp4',
    'https://cdn.discordapp.com/attachments/756209115209924749/784848094344249344/sons.mp4',
    'https://cdn.discordapp.com/attachments/756209115209924749/784848095938609162/picosa.mp4',
    'https://cdn.discordapp.com/attachments/756209115209924749/784848114208997407/vou_dancar.mp4',
    'https://cdn.discordapp.com/attachments/756209115209924749/784848120307253278/ui_disgraca.mp4',
    'https://cdn.discordapp.com/attachments/756209115209924749/784848123183759430/WhatsApp_Video_2020-06-08_at_18.49.32.mp4',
    'https://cdn.discordapp.com/attachments/756209115209924749/784848132814274590/180px-George_Floyd.png',
    'https://cdn.discordapp.com/attachments/756209115209924749/784848135470055454/456ec22a-60e2-4cd8-9859-c1c448447749.png',
    'https://cdn.discordapp.com/attachments/756209115209924749/784848139759648768/Ej-outuXYAY92xQ.png',
    'https://cdn.discordapp.com/attachments/756209115209924749/784848140427722832/81786590_865494437232679_4660003512125729577_n.png',
    'https://cdn.discordapp.com/attachments/756209115209924749/784848143912665118/TNvaNBeNNRW58o4_ktljDf3hBnTl63_iPE1jOuKlDdY.png',
    'https://cdn.discordapp.com/attachments/756209115209924749/784847936755597332/negoney.mp4'
  ]

  const meme = Math.floor(Math.random() * memes.length)

  msg.channel.send(memes[meme])
}

module.exports = {
  name: "memes",
  help: "Mostra um meme aleatoriamente engracado",
  execute
}