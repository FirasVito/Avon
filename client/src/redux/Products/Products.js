const productsData = [

    {"OffersNo":"OF24-00697","CatalogueNo":"CAT24-25","TypeOffre":"003","NoArticleFacturation":"P001125","DescriptionOffre":"Lot Power Stay","TypeResultatOffre":0,"FormeResultatOffre":0,"PrixResultatOffre":54.000,"PourcentageRemiseOffre":"0","QteResultatOffre":0,"Ncompagne":"","DescriptionType":"","TypeOffreBRBA":"01","PrixRegulier":126.000,"DescrOffers":"1 Eye Liner  + 1 Gel Treinté au choix"},
    {"OffersNo":"OF24-00739","CatalogueNo":"CAT24-26","TypeOffre":"007","NoArticleFacturation":"BA102401","DescriptionOffre":"Lot Wow 1 ","TypeResultatOffre":0,"FormeResultatOffre":0,"PrixResultatOffre":69.000,"PourcentageRemiseOffre":"0","QteResultatOffre":0,"Ncompagne":"","DescriptionType":"","TypeOffreBRBA":"02","PrixRegulier":250.000,"DescrOffers":"1 Bain Mousse + 1 Gel Aprés Soleil + 1 Créme + 1 Fragrance + 1 Créme solaire + 1 Savon Liquide"},
    {"OffersNo":"OF24-00698","CatalogueNo":"CAT24-25","TypeOffre":"007","NoArticleFacturation":"BR102401","DescriptionOffre":"Lot Attraction","TypeResultatOffre":0,"FormeResultatOffre":0,"PrixResultatOffre":76.000,"PourcentageRemiseOffre":"0","QteResultatOffre":0,"Ncompagne":"","DescriptionType":"","TypeOffreBRBA":"01","PrixRegulier":169.000,"DescrOffers":"1 Eau de Prfim + 1 Lait Corps"},
    {"OffersNo":"OF24-00740","CatalogueNo":"CAT24-26","TypeOffre":"007","NoArticleFacturation":"BA102402","DescriptionOffre":"Lot Wow 2","TypeResultatOffre":0,"FormeResultatOffre":0,"PrixResultatOffre":69.000,"PourcentageRemiseOffre":"0","QteResultatOffre":0,"Ncompagne":"","DescriptionType":"","TypeOffreBRBA":"02","PrixRegulier":250.000,"DescrOffers":"1 Bain Mousse + 1 Vaporisateur Aprés Soleil + 1 Créme Solaire + 1 Fragrance + 1 Gommage exofaliante + 1 Savon Liquide"},
    {"OffersNo":"OF24-00699","CatalogueNo":"CAT24-25","TypeOffre":"007","NoArticleFacturation":"BR102402","DescriptionOffre":"Lot Attraction Awaken","TypeResultatOffre":0,"FormeResultatOffre":0,"PrixResultatOffre":76.000,"PourcentageRemiseOffre":"0","QteResultatOffre":0,"Ncompagne":"","DescriptionType":"","TypeOffreBRBA":"01","PrixRegulier":169.000,"DescrOffers":"1 Eau de Prfun + 1 Lait Corps"},
    {"OffersNo":"OF24-00741","CatalogueNo":"CAT24-26","TypeOffre":"004","NoArticleFacturation":"P001139","DescriptionOffre":"Lot Laits Corps","TypeResultatOffre":0,"FormeResultatOffre":0,"PrixResultatOffre":24.000,"PourcentageRemiseOffre":"0","QteResultatOffre":0,"Ncompagne":"","DescriptionType":"","TypeOffreBRBA":"02","PrixRegulier":80.000,"DescrOffers":"2 Laits Corps au choix"},
    {"OffersNo":"OF24-00700","CatalogueNo":"CAT24-25","TypeOffre":"007","NoArticleFacturation":"BR102403","DescriptionOffre":"Lot Lov U Connected","TypeResultatOffre":0,"FormeResultatOffre":0,"PrixResultatOffre":65.000,"PourcentageRemiseOffre":"0","QteResultatOffre":0,"Ncompagne":"","DescriptionType":"","TypeOffreBRBA":"01","PrixRegulier":169.000,"DescrOffers":"1 Eau de Parfum + 1 Lait Corps"},
    {"OffersNo":"OF24-00743","CatalogueNo":"CAT24-26","TypeOffre":"004","NoArticleFacturation":"P001141","DescriptionOffre":"Lot Kids","TypeResultatOffre":0,"FormeResultatOffre":0,"PrixResultatOffre":21.000,"PourcentageRemiseOffre":"0","QteResultatOffre":0,"Ncompagne":"","DescriptionType":"","TypeOffreBRBA":"02","PrixRegulier":56.000,"DescrOffers":"2 Gel Douche + 1 Shampooing + 1 Spray délémant pour cheveux"},
    {"OffersNo":"OF24-00701","CatalogueNo":"CAT24-25","TypeOffre":"007","NoArticleFacturation":"BR102404","DescriptionOffre":"Lot Lov U ","TypeResultatOffre":0,"FormeResultatOffre":0,"PrixResultatOffre":65.000,"PourcentageRemiseOffre":"0","QteResultatOffre":0,"Ncompagne":"","DescriptionType":"","TypeOffreBRBA":"01","PrixRegulier":169.000,"DescrOffers":"1 Eau de Parfum + 1 Lait Corps"},
    {"OffersNo":"OF24-00744","CatalogueNo":"CAT24-26","TypeOffre":"004","NoArticleFacturation":"P001142","DescriptionOffre":"Lot Crémes Mains","TypeResultatOffre":0,"FormeResultatOffre":0,"PrixResultatOffre":26.000,"PourcentageRemiseOffre":"0","QteResultatOffre":0,"Ncompagne":"","DescriptionType":"","TypeOffreBRBA":"02","PrixRegulier":26.000,"DescrOffers":"2 Crémes Mains au choix"},
    {"OffersNo":"OF24-00702","CatalogueNo":"CAT24-25","TypeOffre":"004","NoArticleFacturation":"P001126","DescriptionOffre":"Lot RAL","TypeResultatOffre":0,"FormeResultatOffre":0,"PrixResultatOffre":45.000,"PourcentageRemiseOffre":"0","QteResultatOffre":0,"Ncompagne":"","DescriptionType":"","TypeOffreBRBA":"01","PrixRegulier":120.000,"DescrOffers":"2 Rouge à levres au choix"},
    {"OffersNo":"OF24-00703","CatalogueNo":"CAT24-25","TypeOffre":"004","NoArticleFacturation":"P001127","DescriptionOffre":"Lot RAL 2","TypeResultatOffre":0,"FormeResultatOffre":0,"PrixResultatOffre":45.000,"PourcentageRemiseOffre":"0","QteResultatOffre":0,"Ncompagne":"","DescriptionType":"","TypeOffreBRBA":"01","PrixRegulier":120.000,"DescrOffers":"2 Rougé à Levrés au choix"},
    {"OffersNo":"OF24-00704","CatalogueNo":"CAT24-25","TypeOffre":"003","NoArticleFacturation":"P001128","DescriptionOffre":"Lot Yeux","TypeResultatOffre":0,"FormeResultatOffre":0,"PrixResultatOffre":58.000,"PourcentageRemiseOffre":"0","QteResultatOffre":0,"Ncompagne":"","DescriptionType":"","TypeOffreBRBA":"01","PrixRegulier":136.000,"DescrOffers":"1 mascara + 1 Ligneur Liquide "},
    {"OffersNo":"OF24-00747","CatalogueNo":"CAT24-26","TypeOffre":"007","NoArticleFacturation":"BA102404","DescriptionOffre":"Lot Glamour","TypeResultatOffre":0,"FormeResultatOffre":0,"PrixResultatOffre":39.000,"PourcentageRemiseOffre":"0","QteResultatOffre":0,"Ncompagne":"","DescriptionType":"","TypeOffreBRBA":"02","PrixRegulier":131.000,"DescrOffers":"1 Crémé Mains + 1 Vernix + 1 Séche Verins + 1 RAL"},
    {"OffersNo":"OF24-00705","CatalogueNo":"CAT24-25","TypeOffre":"003","NoArticleFacturation":"P001129","DescriptionOffre":"Lot Ongles","TypeResultatOffre":0,"FormeResultatOffre":0,"PrixResultatOffre":21.000,"PourcentageRemiseOffre":"0","QteResultatOffre":0,"Ncompagne":"","DescriptionType":"","TypeOffreBRBA":"01","PrixRegulier":49.000,"DescrOffers":"1 Créme Mains + 1 Vernis Ongles au choix"},
    {"OffersNo":"OF24-00748","CatalogueNo":"CAT24-26","TypeOffre":"007","NoArticleFacturation":"BA102405","DescriptionOffre":"Lot Girls","TypeResultatOffre":0,"FormeResultatOffre":0,"PrixResultatOffre":28.000,"PourcentageRemiseOffre":"0","QteResultatOffre":0,"Ncompagne":"","DescriptionType":"","TypeOffreBRBA":"02","PrixRegulier":78.000,"DescrOffers":"1 Lait Corps + 1 Brume Corps + 1 Gel Douche"},
    {"OffersNo":"OF24-00706","CatalogueNo":"CAT24-25","TypeOffre":"007","NoArticleFacturation":"BR102405","DescriptionOffre":"Lot TTA Today","TypeResultatOffre":0,"FormeResultatOffre":0,"PrixResultatOffre":85.000,"PourcentageRemiseOffre":"0","QteResultatOffre":0,"Ncompagne":"","DescriptionType":"","TypeOffreBRBA":"01","PrixRegulier":195.000,"DescrOffers":"1 Eau de Parfum + 1 Lait Corps"},
    {"OffersNo":"OF24-00749","CatalogueNo":"CAT24-26","TypeOffre":"003","NoArticleFacturation":"P001144","DescriptionOffre":"Lot Yeux","TypeResultatOffre":0,"FormeResultatOffre":0,"PrixResultatOffre":32.000,"PourcentageRemiseOffre":"0","QteResultatOffre":0,"Ncompagne":"","DescriptionType":"","TypeOffreBRBA":"02","PrixRegulier":90.000,"DescrOffers":"1 Mascara  + 1 Ligneur Contour Yeux"},
    {"OffersNo":"OF24-00707","CatalogueNo":"CAT24-25","TypeOffre":"007","NoArticleFacturation":"BR102406","DescriptionOffre":"Lot TTA Tomorrow","TypeResultatOffre":0,"FormeResultatOffre":0,"PrixResultatOffre":85.000,"PourcentageRemiseOffre":"0","QteResultatOffre":0,"Ncompagne":"","DescriptionType":"","TypeOffreBRBA":"01","PrixRegulier":195.000,"DescrOffers":"1 Eau de Parfum + 1 Lait Corps"},
    {"OffersNo":"OF24-00750","CatalogueNo":"CAT24-26","TypeOffre":"007","NoArticleFacturation":"BA102406","DescriptionOffre":"Lot Sun+ 1","TypeResultatOffre":0,"FormeResultatOffre":0,"PrixResultatOffre":40.000,"PourcentageRemiseOffre":"0","QteResultatOffre":0,"Ncompagne":"","DescriptionType":"","TypeOffreBRBA":"02","PrixRegulier":158.000,"DescrOffers":"1 Lait Aprés Soleil + 1 Huile Bronzante + 1 Huile Soin"},
    {"OffersNo":"OF24-00708","CatalogueNo":"CAT24-25","TypeOffre":"007","NoArticleFacturation":"BR102407","DescriptionOffre":"Lot TTA Wonder","TypeResultatOffre":0,"FormeResultatOffre":0,"PrixResultatOffre":85.000,"PourcentageRemiseOffre":"0","QteResultatOffre":0,"Ncompagne":"","DescriptionType":"","TypeOffreBRBA":"01","PrixRegulier":195.000,"DescrOffers":"1 Eau de Parfum + 1 Lait Corps"},
    {"OffersNo":"OF24-00751","CatalogueNo":"CAT24-26","TypeOffre":"007","NoArticleFacturation":"BA102407","DescriptionOffre":"Lot Sun+ 2","TypeResultatOffre":0,"FormeResultatOffre":0,"PrixResultatOffre":40.000,"PourcentageRemiseOffre":"0","QteResultatOffre":0,"Ncompagne":"","DescriptionType":"","TypeOffreBRBA":"02","PrixRegulier":166.000,"DescrOffers":"1 Lait Soleil + 1 Accélérateur + 1 Huile De soin"},
    {"OffersNo":"OF24-00709","CatalogueNo":"CAT24-25","TypeOffre":"007","NoArticleFacturation":"BR102408","DescriptionOffre":"LOT Incandessence","TypeResultatOffre":0,"FormeResultatOffre":0,"PrixResultatOffre":71.000,"PourcentageRemiseOffre":"0","QteResultatOffre":0,"Ncompagne":"","DescriptionType":"","TypeOffreBRBA":"01","PrixRegulier":146.000,"DescrOffers":"1 Eau de Parfum + 1 Déodorant à bille"},
    {"OffersNo":"OF24-00752","CatalogueNo":"CAT24-26","TypeOffre":"007","NoArticleFacturation":"BA102408","DescriptionOffre":"Lot Anew","TypeResultatOffre":0,"FormeResultatOffre":0,"PrixResultatOffre":34.000,"PourcentageRemiseOffre":"0","QteResultatOffre":0,"Ncompagne":"","DescriptionType":"","TypeOffreBRBA":"02","PrixRegulier":124.000,"DescrOffers":"1 Tonique  + 1 Masque a base de Cuivre"},
    {"OffersNo":"OF24-00710","CatalogueNo":"CAT24-25","TypeOffre":"007","NoArticleFacturation":"BR102409","DescriptionOffre":"Lot Cherich","TypeResultatOffre":0,"FormeResultatOffre":0,"PrixResultatOffre":86.000,"PourcentageRemiseOffre":"0","QteResultatOffre":0,"Ncompagne":"","DescriptionType":"","TypeOffreBRBA":"01","PrixRegulier":176.000,"DescrOffers":"1 Eau de Prfum + 1 Brume "},
    {"OffersNo":"OF24-00711","CatalogueNo":"CAT24-25","TypeOffre":"007","NoArticleFacturation":"BR102410","DescriptionOffre":"Lot Far Away Endless Sun","TypeResultatOffre":0,"FormeResultatOffre":0,"PrixResultatOffre":76.000,"PourcentageRemiseOffre":"0","QteResultatOffre":0,"Ncompagne":"","DescriptionType":"","TypeOffreBRBA":"01","PrixRegulier":169.000,"DescrOffers":"1 Eau de Parfum + 1 Lait Corps"},
    {"OffersNo":"OF24-00712","CatalogueNo":"CAT24-25","TypeOffre":"007","NoArticleFacturation":"BR102411","DescriptionOffre":"Lot Percieve","TypeResultatOffre":0,"FormeResultatOffre":0,"PrixResultatOffre":76.000,"PourcentageRemiseOffre":"0","QteResultatOffre":0,"Ncompagne":"","DescriptionType":"","TypeOffreBRBA":"01","PrixRegulier":169.000,"DescrOffers":"1 Eau de Parfum + 1 Lait Corps"},
{"OffersNo":"OF24-00716","CatalogueNo":"CAT24-25","TypeOffre":"007","NoArticleFacturation":"BR102412","DescriptionOffre":"Lot Nutra Sensible","TypeResultatOffre":0,"FormeResultatOffre":0,"PrixResultatOffre":53.000,"PourcentageRemiseOffre":"0","QteResultatOffre":0,"Ncompagne":"","DescriptionType":"","TypeOffreBRBA":"01","PrixRegulier":110.000,"DescrOffers":"1 Nettoyant + 1 Créme de jour"},
    {"OffersNo":"OF24-00717","CatalogueNo":"CAT24-25","TypeOffre":"007","NoArticleFacturation":"BR102413","DescriptionOffre":"Lot Nutra Matte","TypeResultatOffre":0,"FormeResultatOffre":0,"PrixResultatOffre":44.000,"PourcentageRemiseOffre":"0","QteResultatOffre":0,"Ncompagne":"","DescriptionType":"","TypeOffreBRBA":"01","PrixRegulier":90.000,"DescrOffers":"1 Mousse Nettoyante"},
    {"OffersNo":"OF24-00718","CatalogueNo":"CAT24-25","TypeOffre":"007","NoArticleFacturation":"BR102414","DescriptionOffre":"Lot Nutra Radiance","TypeResultatOffre":0,"FormeResultatOffre":0,"PrixResultatOffre":44.000,"PourcentageRemiseOffre":"0","QteResultatOffre":0,"Ncompagne":"","DescriptionType":"","TypeOffreBRBA":"01","PrixRegulier":90.000,"DescrOffers":"1 Gel Nettoyante + 1 Créme de Jour"},
    {"OffersNo":"OF24-00719","CatalogueNo":"CAT24-25","TypeOffre":"007","NoArticleFacturation":"BR102415","DescriptionOffre":"Lot Nourissant ","TypeResultatOffre":0,"FormeResultatOffre":0,"PrixResultatOffre":30.500,"PourcentageRemiseOffre":"0","QteResultatOffre":0,"Ncompagne":"","DescriptionType":"","TypeOffreBRBA":"01","PrixRegulier":63.000,"DescrOffers":"1 Gel Rafraichissant + 1 Créme de Jour + 1 Masque Visage"},
    {"OffersNo":"OF24-00720","CatalogueNo":"CAT24-25","TypeOffre":"007","NoArticleFacturation":"BR102416","DescriptionOffre":"Lot Hydratant","TypeResultatOffre":0,"FormeResultatOffre":0,"PrixResultatOffre":30.500,"PourcentageRemiseOffre":"0","QteResultatOffre":0,"Ncompagne":"","DescriptionType":"","TypeOffreBRBA":"01","PrixRegulier":63.000,"DescrOffers":"1 Gel Rafraichissant + 1 Crémé Jour + 1 Masque Visage"},
    {"OffersNo":"OF24-00721","CatalogueNo":"CAT24-25","TypeOffre":"007","NoArticleFacturation":"BR102420","DescriptionOffre":"Lot Nourishment","TypeResultatOffre":0,"FormeResultatOffre":0,"PrixResultatOffre":24.000,"PourcentageRemiseOffre":"0","QteResultatOffre":0,"Ncompagne":"","DescriptionType":"","TypeOffreBRBA":"01","PrixRegulier":54.000,"DescrOffers":"1 Shampooing + 1 Aprés-Shampooing"},
    {"OffersNo":"OF24-00722","CatalogueNo":"CAT24-25","TypeOffre":"007","NoArticleFacturation":"BR102422","DescriptionOffre":"Lot Reconstruction","TypeResultatOffre":0,"FormeResultatOffre":0,"PrixResultatOffre":24.000,"PourcentageRemiseOffre":"0","QteResultatOffre":0,"Ncompagne":"","DescriptionType":"","TypeOffreBRBA":"01","PrixRegulier":54.000,"DescrOffers":"1 Sahmpooing + 1 Aprés-Shampooing"},
    {"OffersNo":"OF24-00723","CatalogueNo":"CAT24-25","TypeOffre":"007","NoArticleFacturation":"BR102423","DescriptionOffre":"Lot HydraBoost","TypeResultatOffre":0,"FormeResultatOffre":0,"PrixResultatOffre":24.000,"PourcentageRemiseOffre":"0","QteResultatOffre":0,"Ncompagne":"","DescriptionType":"","TypeOffreBRBA":"01","PrixRegulier":54.000,"DescrOffers":"1 Shampooing + 1 Aprés-Shampooing"},
    {"OffersNo":"OF24-00724","CatalogueNo":"CAT24-25","TypeOffre":"007","NoArticleFacturation":"BR102424","DescriptionOffre":"Lot Deeply Purifying","TypeResultatOffre":0,"FormeResultatOffre":0,"PrixResultatOffre":24.000,"PourcentageRemiseOffre":"0","QteResultatOffre":0,"Ncompagne":"","DescriptionType":"","TypeOffreBRBA":"01","PrixRegulier":54.000,"DescrOffers":"1 Shampooing + 1 Aprés-Shampooing"},
{"OffersNo":"OF24-00731","CatalogueNo":"CAT24-25","TypeOffre":"007","NoArticleFacturation":"BR102425","DescriptionOffre":"Lot Raspberry","TypeResultatOffre":0,"FormeResultatOffre":0,"PrixResultatOffre":41.000,"PourcentageRemiseOffre":"0","QteResultatOffre":0,"Ncompagne":"","DescriptionType":"","TypeOffreBRBA":"01","PrixRegulier":93.000,"DescrOffers":"1 Bain Moussant 1L + 1 Gel Douche + 1 Brume Corps"},
    {"OffersNo":"OF24-00732","CatalogueNo":"CAT24-25","TypeOffre":"007","NoArticleFacturation":"BR102426","DescriptionOffre":"Lot Whit Lily","TypeResultatOffre":0,"FormeResultatOffre":0,"PrixResultatOffre":41.000,"PourcentageRemiseOffre":"0","QteResultatOffre":0,"Ncompagne":"","DescriptionType":"","TypeOffreBRBA":"01","PrixRegulier":93.000,"DescrOffers":"1 Bain Moussant 1L + 1 Créme Douche 500ml + 1 Brume Corps"},
    {"OffersNo":"OF24-00734","CatalogueNo":"CAT24-25","TypeOffre":"007","NoArticleFacturation":"BR102417","DescriptionOffre":"Lot BlackHead","TypeResultatOffre":0,"FormeResultatOffre":0,"PrixResultatOffre":29.000,"PourcentageRemiseOffre":"0","QteResultatOffre":0,"Ncompagne":"","DescriptionType":"","TypeOffreBRBA":"01","PrixRegulier":66.000,"DescrOffers":"1 Masque Clarifiant + 1 Tonique"},
    {"OffersNo":"OF24-00735","CatalogueNo":"CAT24-25","TypeOffre":"007","NoArticleFacturation":"BR102418","DescriptionOffre":"Lot Pore & Shine","TypeResultatOffre":0,"FormeResultatOffre":0,"PrixResultatOffre":29.000,"PourcentageRemiseOffre":"0","QteResultatOffre":0,"Ncompagne":"","DescriptionType":"","TypeOffreBRBA":"01","PrixRegulier":66.000,"DescrOffers":"1 Nettoyant Charbon + 1 Tonique"},
    {"OffersNo":"OF24-00736","CatalogueNo":"CAT24-25","TypeOffre":"007","NoArticleFacturation":"BR102419","DescriptionOffre":"Lot ClearSkin ","TypeResultatOffre":0,"FormeResultatOffre":0,"PrixResultatOffre":27.000,"PourcentageRemiseOffre":"0","QteResultatOffre":0,"Ncompagne":"","DescriptionType":"","TypeOffreBRBA":"01","PrixRegulier":62.000,"DescrOffers":"1 Savon Nettoyant + 1 Exfoliant"},
    //{"OffersNo":"OF24-00738","CatalogueNo":"CAT24-25","TypeOffre":"007","NoArticleFacturation":"DGM9999","DescriptionOffre":"Dotation Gratuite Brochure","TypeResultatOffre":0,"FormeResultatOffre":0,"PrixResultatOffre":0.000,"PourcentageRemiseOffre":"0","QteResultatOffre":0,"Ncompagne":"","DescriptionType":"","TypeOffreBRBA":"01","PrixRegulier":0.000,"DescrOffers":"Brochure gratuite"}
    //{"OffersNo":"OF24-00725","CatalogueNo":"CAT24-25","TypeOffre":"004","NoArticleFacturation":"P001133","DescriptionOffre":"Lot Avon Care 2en1","TypeResultatOffre":0,"FormeResultatOffre":0,"PrixResultatOffre":33.000,"PourcentageRemiseOffre":"0","QteResultatOffre":0,"Ncompagne":"","DescriptionType":"","TypeOffreBRBA":"01","PrixRegulier":70.000,"DescrOffers":"2 Avon Care au choix"},
    //{"OffersNo":"OF24-00726","CatalogueNo":"CAT24-25","TypeOffre":"004","NoArticleFacturation":"P001134","DescriptionOffre":"Lot Multi-Usages","TypeResultatOffre":0,"FormeResultatOffre":0,"PrixResultatOffre":40.000,"PourcentageRemiseOffre":"0","QteResultatOffre":0,"Ncompagne":"","DescriptionType":"","TypeOffreBRBA":"01","PrixRegulier":84.000,"DescrOffers":"2 au choix"},
    //{"OffersNo":"OF24-00727","CatalogueNo":"CAT24-25","TypeOffre":"004","NoArticleFacturation":"P001135","DescriptionOffre":"Lot Gels-Douche","TypeResultatOffre":0,"FormeResultatOffre":0,"PrixResultatOffre":25.000,"PourcentageRemiseOffre":"0","QteResultatOffre":0,"Ncompagne":"","DescriptionType":"","TypeOffreBRBA":"01","PrixRegulier":58.000,"DescrOffers":"2 Gels douche au choix"},
    //{"OffersNo":"OF24-00728","CatalogueNo":"CAT24-25","TypeOffre":"004","NoArticleFacturation":"P001136","DescriptionOffre":"Lot Bains Moussants","TypeResultatOffre":0,"FormeResultatOffre":0,"PrixResultatOffre":38.000,"PourcentageRemiseOffre":"0","QteResultatOffre":0,"Ncompagne":"","DescriptionType":"","TypeOffreBRBA":"01","PrixRegulier":80.000,"DescrOffers":"2 Bains Moussants au choix"},
    //{"OffersNo":"OF24-00729","CatalogueNo":"CAT24-25","TypeOffre":"004","NoArticleFacturation":"P001137","DescriptionOffre":"Lot Déo à bille","TypeResultatOffre":0,"FormeResultatOffre":0,"PrixResultatOffre":16.000,"PourcentageRemiseOffre":"0","QteResultatOffre":0,"Ncompagne":"","DescriptionType":"","TypeOffreBRBA":"01","PrixRegulier":36.000,"DescrOffers":"3 Déo à bille au choix"},
    //{"OffersNo":"OF24-00730","CatalogueNo":"CAT24-25","TypeOffre":"004","NoArticleFacturation":"P001138","DescriptionOffre":"Lot FootWorks","TypeResultatOffre":0,"FormeResultatOffre":0,"PrixResultatOffre":37.000,"PourcentageRemiseOffre":"0","QteResultatOffre":0,"Ncompagne":"","DescriptionType":"","TypeOffreBRBA":"01","PrixRegulier":84.000,"DescrOffers":"3 Footworks au choix"},
        //{"OffersNo":"OF24-00713","CatalogueNo":"CAT24-25","TypeOffre":"003","NoArticleFacturation":"P001130","DescriptionOffre":"Lot Lait &  Déo","TypeResultatOffre":0,"FormeResultatOffre":0,"PrixResultatOffre":20.900,"PourcentageRemiseOffre":"0","QteResultatOffre":0,"Ncompagne":"","DescriptionType":"","TypeOffreBRBA":"01","PrixRegulier":47.000,"DescrOffers":"1 Lait au choix + 1 Déo au choix"},
    //{"OffersNo":"OF24-00714","CatalogueNo":"CAT24-25","TypeOffre":"004","NoArticleFacturation":"P001131","DescriptionOffre":"Lot Full Speed","TypeResultatOffre":0,"FormeResultatOffre":0,"PrixResultatOffre":108.000,"PourcentageRemiseOffre":"0","QteResultatOffre":0,"Ncompagne":"","DescriptionType":"","TypeOffreBRBA":"01","PrixRegulier":248.000,"DescrOffers":"2 Full Speed au choix"},
    //{"OffersNo":"OF24-00715","CatalogueNo":"CAT24-25","TypeOffre":"003","NoArticleFacturation":"P001132","DescriptionOffre":"Lot Gel-douche & Déo à bille","TypeResultatOffre":0,"FormeResultatOffre":0,"PrixResultatOffre":19.900,"PourcentageRemiseOffre":"0","QteResultatOffre":0,"Ncompagne":"","DescriptionType":"","TypeOffreBRBA":"01","PrixRegulier":45.000,"DescrOffers":"1 Gel-douche au choix + Déo à bille au choix"},
        //{"OffersNo":"OF24-00746","CatalogueNo":"CAT24-26","TypeOffre":"007","NoArticleFacturation":"BA102403","DescriptionOffre":"Lot Match Me","TypeResultatOffre":0,"FormeResultatOffre":0,"PrixResultatOffre":49.000,"PourcentageRemiseOffre":"0","QteResultatOffre":0,"Ncompagne":"","DescriptionType":"","TypeOffreBRBA":"02","PrixRegulier":176.000,"DescrOffers":"1 Fond de Teint + 1 Fixateur + 1 Correcteur de Teint "},
    //{"OffersNo":"OF24-00745","CatalogueNo":"CAT24-26","TypeOffre":"004","NoArticleFacturation":"P001143","DescriptionOffre":"Lot Gels Douche ","TypeResultatOffre":0,"FormeResultatOffre":0,"PrixResultatOffre":15.000,"PourcentageRemiseOffre":"0","QteResultatOffre":0,"Ncompagne":"","DescriptionType":"","TypeOffreBRBA":"02","PrixRegulier":44.000,"DescrOffers":"2 Gels Douche au choix"},


    ];
    export default productsData
