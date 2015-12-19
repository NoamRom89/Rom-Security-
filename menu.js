var main_menu = '<div>' +
    '<ul class="main_menu"> ' +
    '<li ng-click="$parent.currentMainLink = \'contact\';"                                              ng-class="{\'mainLinkHover\':currentMainLink == \'contact\'}"><img > <a href="#"> צור קשר </a> </li>'+
    '<li ng-click="$parent.currentMainLink = \'customers\'; $parent.currentPage = \'ourCustomers\'"     ng-class="{\'mainLinkHover\':currentMainLink == \'customers\'}"> <a href="#"> לקוחות </a> </li>'+
    '<li ng-click="$parent.currentMainLink = \'commercial\'; $parent.currentPage = \'commercial\'"      ng-class="{\'mainLinkHover\':currentMainLink == \'commercial\'}"> <a href="#"> מסחרי </a> </li>'+
    '<li ng-click="$parent.currentMainLink = \'residential\'; $parent.currentPage = \'residential\'"    ng-class="{\'mainLinkHover\':currentMainLink == \'residential\'}"> <a href="#"> פרטי </a> </li>'+
    '<li ng-click="$parent.currentMainLink = \'about\'; $parent.currentPage = \'about\'"                ng-class="{\'mainLinkHover\':currentMainLink == \'about\'}"> <a href="#"> אודות </a> </li>'+
    '<li ng-click="$parent.currentPage = \'main\';"                                                     ng-class="{\'mainLinkHover\':currentPage == \'main\'}" style="border: none;"> <a href="#"> דף בית </a> </li>'+
    '</ul>' +
'</div>'


