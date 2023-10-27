let cardUsa;
let cardEuropa;
let cardMundial;

let sectionCardUsa;
let cardGlobal;

let btnVoltar;

let textLayout;

let ulListUsa;

function start() {
  cardUsa = $("#card-imagem-usa");
  cardEuropa = $("#card-imagem-europa");
  cardMundial = $("#card-imagem-mundial");
  sectionCardUsa = $("#section-card-usa");
  cardGlobal = $("#card-global");
  textLayout = $("#text-layout");
  btnVoltar = $('#btn-voltar');

  ulListUsa = $('#ul-list-usa');

  cardUsa.click(() => {
    sectionCardUsa.show();
    cardGlobal.hide();
  });

  cardEuropa.click(() => {
    sectionCardUsa.show();
    cardGlobal.hide();
  });

  cardMundial.click(() => {
    sectionCardUsa.show();
    cardGlobal.hide();
    
  });
  
  padrao();
}

function voltarCardUsa() {
  sectionCardUsa.hide();
  cardGlobal.show();
  btnVoltar.prop("onclick", "voltarCardUsa");
  
}

function listOptions(id) {

  let opcao = $(`#opcao${id}`);

  textLayout.hide();
  ulListUsa.hide();
  opcao.show();
  
  btnVoltar.off("click").on("click", () => {
    textLayout.show();
    ulListUsa.show();
    opcao.hide();
    $([document.documentElement, document.body]).animate({
      scrollTop: $("#section-card-usa").offset().top -0
     }, 500);
    padrao();
  });

}

function padrao() {
  btnVoltar.click(() => {
    sectionCardUsa.hide();
    cardGlobal.show();
    $([document.documentElement, document.body]).animate({
      scrollTop: $("#section-card-usa").offset().top -100
     }, 500);
  });

  $([document.documentElement, document.body]).animate({
    scrollTop: $("#section-card-usa").offset().top -100
   }, 500);
}
