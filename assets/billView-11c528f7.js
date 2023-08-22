import{_ as r,R as _,b as u,o as a,c,a as t,t as e,d as n,n as m,e as p,w as b,v as h,f as y}from"./index-f2eb8648.js";const f="/coupon/assets/icons8-info-success-38adac5f.svg";const v={data(){return{isLoading:!1,billDetail:{plate:"ABC-1111",amount:50,location:"台中誠品",inTime:"2023-01-01 11:11:11",totalDiscount:1,discount:{buffer:.5,coupon:.5}},isScan:!0,discountInfo:{discountNum:"",invoiceAmount:null}}},components:{RouterView:_,RouterLink:u},methods:{openModal(){const d=new bootstrap.Modal(document.getElementById("discountModal")),o=document.getElementById("toggleMyModal");d.show(o)},scanInput(){this.isScan=!this.isScan},getDiscount(){console.log(this.discountInfo),new bootstrap.Modal(document.getElementById("discountModal")),document.getElementById("toggleMyModal")}},mounted(){}},x=t("div",{class:"bg-dark text-white text-center py-3 mb-3"},"停車費繳費",-1),g={class:"container"},D={class:"plate-bg"},M={class:"billDetail mt-2"},I={class:"detailContent"},k={class:"amount"},w=t("p",{class:"text-secondary pt-3 ps-3"},"應繳金額",-1),N={class:"text-center"},C={class:"fs-3"},B={class:"detail"},V={class:"text-secondary"},S={class:"text-primary"},T={class:"text-secondary"},E={class:"text-primary"},j={class:"text-secondary"},L={class:"text-primary"},R={class:"btns d-flex justify-content-around"},A={key:0,class:"warningInfo"},F=t("p",{class:"text-success fs-6 mt-1"},[t("img",{src:f,alt:"info-icon"}),n(" 無需繳費，請儘速離場，謝謝！")],-1),z=[F],U={class:"discountDetail mt-2 pb-2"},q=t("p",{class:"text-center"},"折抵明細",-1),G={class:"text-secondary"},H={class:"text-primary"},J={class:"text-secondary"},K={class:"text-primary"},O={class:"modal fade",id:"discountModal","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"},P={class:"modal-dialog modal-sm position-absolute top-40 start-50 translate-middle",style:{width:"75%"}},Q={class:"modal-content"},W=t("div",{class:"modal-header"},[t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),X={class:"modal-body"},Y={key:0},Z=t("div",{class:"scan"},null,-1),$={class:"form-floating my-3"},tt=t("label",{for:"discountNum",class:"fs-6"},"折扣券號碼或發票號碼",-1),st={key:1},ot=y('<div class="mb-3"><label for="exampleFormControlInput1" class="form-label">折扣券號碼或發票號碼<span class="text-danger">*</span></label><input type="text" class="form-control" id="discountNum" placeholder="請輸入折扣券號碼或發票號碼"></div><div class="mb-3"><label for="exampleFormControlInput1" class="form-label">發票金額</label><input type="text" class="form-control" id="discountNum" placeholder="請輸入發票金額"></div>',2),et=[ot],nt={class:"modal-footer"},lt={class:"d-flex justify-content-between"},it={class:"d-flex justify-content-between"},at=t("button",{type:"button",class:"btn btn-sm btn-outline-secondary me-1","data-bs-dismiss":"modal"},"取消",-1);function ct(d,o,dt,rt,s,i){return a(),c("main",null,[x,t("div",g,[t("div",D,e(s.billDetail.plate),1),t("div",M,[t("div",I,[t("div",k,[w,t("p",N,[n("NT$ "),t("span",C,e(s.billDetail.amount),1)])]),t("div",B,[t("p",V,[n("停車地點"),t("span",S,"　"+e(s.billDetail.location),1)]),t("p",T,[n("進場時間"),t("span",E,"　"+e(s.billDetail.inTime),1)]),t("p",j,[n("折抵時數"),t("span",L,"　"+e(s.billDetail.totalDiscount)+" 小時",1)])]),t("div",R,[t("button",{class:"btn btn-primary",id:"toggleMyModal",onClick:o[0]||(o[0]=(...l)=>i.openModal&&i.openModal(...l))},"發票折抵"),t("button",{class:m(["btn",s.billDetail.amount==0?"btn-secondary":"btn-primary"])},"繳費離場",2)]),s.billDetail.amount==0?(a(),c("div",A,z)):p("",!0),t("div",U,[q,t("p",G,[n("緩衝時間"),t("span",H,"　"+e(s.billDetail.discount.buffer)+" 小時",1)]),t("p",J,[n("發票折抵"),t("span",K,"　"+e(s.billDetail.discount.coupon)+" 小時",1)])])])]),t("div",O,[t("div",P,[t("div",Q,[W,t("div",X,[s.isScan?(a(),c("div",Y,[Z,t("div",$,[b(t("input",{type:"text",class:"form-control fs-5",id:"discountNum","onUpdate:modelValue":o[1]||(o[1]=l=>s.discountInfo.discountNum=l),placeholder:"請輸入折扣券號碼或發票號碼"},null,512),[[h,s.discountInfo.discountNum]]),tt])])):(a(),c("div",st,et))]),t("div",nt,[t("div",lt,[t("button",{class:"btn btn-primary me-4",onClick:o[2]||(o[2]=(...l)=>i.scanInput&&i.scanInput(...l))},e(s.isScan?"手動輸入":"掃描輸入"),1),t("div",it,[at,t("button",{type:"button",class:"btn btn-sm btn-outline-primary",onClick:o[3]||(o[3]=l=>i.getDiscount(s.discountInfo))},"確認")])])])])])])])])}const ut=r(v,[["render",ct]]);export{ut as default};
