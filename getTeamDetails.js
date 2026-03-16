function getTeamDetails(team) {

  // TODO: https://teamcolorcodes.com/arkansas-razorbacks-color-codes/ ? team.ColorCodes
  switch (team.Name) {
      case "Akron":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2006.png";
        team.TeamMascot = "Zips";
        team.MascotName = "Zippy the Kangaroo";
        team.ColorCodes = [["Blue", "#041E42"], ["Gold", "#B3A369"]];
        team.MascotImage = "https://tinyurl.com/mtum3d5x";
        break;

      case "Alabama":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/333.png";
        team.TeamMascot = "Crimson Tide";
        team.MascotName = "Big Al";
        team.ColorCodes = [["Crimson", "#9E1B32"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/3ab4fhy9";
        break;

      case "Alabama St":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2011.png";
        team.TeamMascot = "Hornets";
        team.MascotName = "Stinger";
        team.ColorCodes = [["Old Gold", "#C99700"], ["Black", "#000000"]];
        team.MascotImage = "https://tinyurl.com/mryreruc";
        break;

      case "American":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/44.png";
        team.TeamMascot = "Eagles";
        team.MascotName = "Clawed Z";
        team.ColorCodes = [["Blue", "#143d8d"], ["Red", "#c41230"], ["White", "#ffffff"]];
        team.MascotImage = "https://tinyurl.com/4brj4be5";
        break;

      case "Arizona":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/12.png";
        team.TeamMascot = "Wildcats";
        team.MascotName = "Wilbur and Wilma";
        team.ColorCodes = [["Cardinal Red", "#CC0033"], ["Navy", "#003366"]];
        team.MascotImage = "https://tinyurl.com/yc6p3ym8";
        break;

      case "Arkansas":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/8.png";
        team.TeamMascot = "Razorbacks";
        team.MascotName = "Tusk IV";
        team.ColorCodes = [["Cardinal", "#9D2235"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/yc6fjyb9";
        break;

      case "Auburn":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2.png";
        team.TeamMascot = "Tigers";
        team.MascotName = "Aubie the Tiger";
        team.ColorCodes = [["Auburn Blue", "#0C2340"], ["Auburn Orange", "#E87722"]];
        team.MascotImage = "https://tinyurl.com/4tm7tthn";
        break;

      case "Baylor":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/239.png";
        team.TeamMascot = "Bears";
        team.MascotName = "Bruiser & Marygold";
        team.ColorCodes = [["Baylor Green", "#154734"], ["Baylor Gold", "#FFB81C"]];
        team.MascotImage = "https://tinyurl.com/mr2hvnbv";
        break;

      case "Boise St":
      case "Boise State":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/68.png";
        team.TeamMascot = "Broncos";
        team.MascotName = "Buster Bronco";
        team.ColorCodes = [["Blue", "#0033A0"], ["Orange", "#D64309"]];
        team.MascotImage = "https://tinyurl.com/2jc3kpa4";
        break;

      case "Brigham Young University":
      case "BYU":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/252.png";
        team.TeamMascot = "Cougars";
        team.MascotName = "Cosmo the Cougar";
        team.ColorCodes = [["Royal Blue", "#002E5D"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/553juupj";
        break;

      case "Bryant":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2677.png";
        team.TeamMascot = "Bulldogs";
        team.MascotName = "Tupper";
        team.ColorCodes = [["Black", "#000000"], ["Gold", "#B59A57"]];
        team.MascotImage = "https://tinyurl.com/59hh3bft";
        break;

      case "Cal Baptist":
      case "California Baptist":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2856.png";
        team.TeamMascot = "Lancers";
        team.MascotName = "Saber the Lancer";
        team.ColorCodes = [["Blue", "#003082"], ["Gold", "#C5A028"]];
        team.MascotImage = "https://tinyurl.com/36m3b2at";
        break;
        
      case "Charleston":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/232.png";
        team.TeamMascot = "Cougars";
        team.MascotName = "Clyde the Cougar";
        team.ColorCodes = [["Maroon", "#6B0C27"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/3w8bjsvd";
        break;

      case "Chattanooga":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/236.png";
        team.TeamMascot = "Mocs";
        team.MascotName = "Scrappy the Mockingbird";
        team.ColorCodes = [["Navy", "#00204E"], ["Gold", "#E0A829"]];
        team.MascotImage = "https://tinyurl.com/bdtzxkja";
        break;

      case "Clemson":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/228.png";
        team.TeamMascot = "Tigers";
        team.MascotName = "The Tiger";
        team.ColorCodes = [["Clemson Orange", "#F66733"], ["Purple", "#522D80"]];
        team.MascotImage = "https://tinyurl.com/yjb3cs3s";
        break;

      case "Colgate":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2142.png";
        team.TeamMascot = "Raiders";
        team.MascotName = "Raider";
        team.ColorCodes = [["Maroon", "#821019"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/52ajch2n";
        break;

      case "Colorado St":
      case "Colorado State":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/36.png";
        team.TeamMascot = "Rams";
        team.MascotName = "CAM the Ram";
        team.ColorCodes = [["Green", "#1E4D2B"], ["Gold", "#C8C372"]];
        team.MascotImage = "https://tinyurl.com/msfdfpwc";
        break;

      case "Creighton":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/156.png";
        team.TeamMascot = "Bluejays";
        team.MascotName = "Billy Bluejay";
        team.ColorCodes = [["Blue", "#005CA9"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/43h37jbb";
        break;

      case "CSU Fullerton":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2252.png";
        team.TeamMascot = "Titans";
        team.MascotName = "Tuffy the Titan";
        team.ColorCodes = [["Navy Blue", "#00274C"], ["Orange", "#FF6600"]];
        team.MascotImage = "https://tinyurl.com/w6hcvbzx";
        break;

      case "Davidson":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2166.png";
        team.TeamMascot = "Wildcats";
        team.MascotName = "Will E. Wildcat";
        team.ColorCodes = [["Red", "#CC0000"], ["Black", "#000000"]];
        team.MascotImage = "https://tinyurl.com/4ehk9u3u";
        break;

      case "Dayton":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2168.png";
        team.TeamMascot = "Flyers";
        team.MascotName = "Rudy Flyer";
        team.ColorCodes = [["Red", "#CE1141"], ["Blue", "#004B8D"]];
        team.MascotImage = "https://tinyurl.com/yswwmu3c";
        break;

      case "Delaware":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/48.png";
        team.TeamMascot = "Blue Hens";
        team.MascotName = "YoUDee";
        team.ColorCodes = [["Blue", "#00539F"], ["Gold", "#FFD200"]];
        team.MascotImage = "https://tinyurl.com/4n7e2rs5";
        break;

      case "Drake":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2181.png";
        team.TeamMascot = "Bulldogs";
        team.MascotName = "Spike";
        team.ColorCodes = [["Drake Blue", "#004477"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/5eunwfsm";
        break;

      case "Duke":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/150.png";
        team.TeamMascot = "Blue Devils";
        team.MascotName = "Blue Devil";
        team.ColorCodes = [["Duke Blue", "#003087"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/yckfu6ts";
        break;

      case "Duquesne":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2184.png";
        team.TeamMascot = "Dukes";
        team.MascotName = "Duke";
        team.ColorCodes = [["Blue", "#041E42"], ["Red", "#BA0C2F"]];
        team.MascotImage = "https://tinyurl.com/3xwzyrsh";
        break;

      case "FAU":
      case "Florida Atlantic":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2226.png";
        team.TeamMascot = "Owls";
        team.MascotName = "Owlsley and Hoot";
        team.ColorCodes = [["Blue", "#003366"], ["Red", "#CC0000"]];
        team.MascotImage = "https://tinyurl.com/jdt9n2v6";
        break;

      case "Florida":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/57.png";
        team.TeamMascot = "Gators";
        team.MascotName = "Albert and Alberta Gator";
        team.ColorCodes = [["Florida Orange", "#FA4616"], ["Florida Blue", "#0021A5"]];
        team.MascotImage = "https://tinyurl.com/yeypdjbt";
        break;

      case "Furman":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/231.png";
        team.TeamMascot = "Paladins";
        team.MascotName = "Victor the Paladin";
        team.ColorCodes = [["Purple", "#582C83"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/bdzny2u5";
        break;

      case "Georgia":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/61.png";
        team.TeamMascot = "Bulldogs";
        team.MascotName = "Uga";
        team.ColorCodes = [["Bulldog Red", "#BA0C2F"], ["Arch Black", "#000000"]];
        team.MascotImage = "https://tinyurl.com/bdd976mr";
        break;

      case "Georgia St":
      case "Georgia State":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2247.png";
        team.TeamMascot = "Panthers";
        team.MascotName = "Pounce";
        team.ColorCodes = [["Blue", "#0039A6"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/4jpnk47a";
        break;

      case "Gonzaga":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2250.png";
        team.TeamMascot = "Bulldogs";
        team.MascotName = "Spike the Bulldog";
        team.ColorCodes = [["Navy Blue", "#002469"], ["Red", "#CE1126"]];
        team.MascotImage = "https://tinyurl.com/mb6t44u4";
        break;

      case "Grand Canyon":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2232.png";
        team.TeamMascot = "Antelopes";
        team.MascotName = "Thunder the Antelope";
        team.ColorCodes = [["Purple", "#522398"], ["Black", "#000000"]];
        team.MascotImage = "https://tinyurl.com/nhf4deev";
        break;

      case "Hawaii":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/62.png";
        team.TeamMascot = "Warriors";
        team.MascotName = "Vili the Warrior";
        team.ColorCodes = [["Green", "#024731"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/ytbb85ya";
        break;
 
      case "High Point":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2272.png";
        team.TeamMascot = "Panthers";
        team.MascotName = "Prowler the Panther";
        team.ColorCodes = [["Royal Purple", "#330072"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/2yxkzved";
        break;

      case "Hofstra":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2275.png";
        team.TeamMascot = "Pride";
        team.MascotName = "KaTie the Pride";
        team.ColorCodes = [["Blue", "#00539B"], ["Gold", "#F0B323"]];
        team.MascotImage = "https://tinyurl.com/uvwwjhcp";
        break;
 
      case "Houston":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/248.png";
        team.TeamMascot = "Cougars";
        team.MascotName = "Shasta and Sasha";
        team.ColorCodes = [["Scarlet", "#CC0000"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/4mmczkyf";
        break;

      case "Howard":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2430.png";
        team.TeamMascot = "Bison";
        team.MascotName = "Big Blue and Lady Blue";
        team.ColorCodes = [["Navy Blue", "#003A63"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/29y4hcee";
        break;

      case "Idaho":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/70.png";
        team.TeamMascot = "Vandals";
        team.MascotName = "Joe Vandal";
        team.ColorCodes = [["Silver", "#C0C0C0"], ["Gold", "#F0B323"]];
        team.MascotImage = "https://tinyurl.com/ya2adhc8";
        break;
 
      case "Illinois":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/356.png";
        team.TeamMascot = "Fighting Illini";
        team.MascotName = "N/A";
        team.ColorCodes = [["Illini Orange", "#E84A27"], ["Navy Blue", "#13294B"]];
        team.MascotImage = "";
        break;

      case "Indiana":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/84.png";
        team.TeamMascot = "Hoosiers";
        team.MascotName = "N/A";
        team.ColorCodes = [["Crimson", "#990000"], ["Cream", "#F2EFE4"]];
        team.MascotImage = "";
        break;

      case "Iona":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/314.png";
        team.TeamMascot = "Gaels";
        team.MascotName = "Killian the Gael";
        team.ColorCodes = [["Maroon", "#8B0000"], ["Gold", "#C5A028"]];
        team.MascotImage = "https://tinyurl.com/5em7d24t";
        break;

      case "Iowa":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2294.png";
        team.TeamMascot = "Hawkeyes";
        team.MascotName = "Herky the Hawk";
        team.ColorCodes = [["Black", "#000000"], ["Gold", "#FFCD00"]];
        team.MascotImage = "https://tinyurl.com/ycycdz7m";
        break;

      case "Iowa St":
      case "Iowa State":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/66.png";
        team.TeamMascot = "Cyclones";
        team.MascotName = "Cy the Cardinal";
        team.ColorCodes = [["Cardinal", "#C8102E"], ["Gold", "#F1BE48"]];
        team.MascotImage = "https://tinyurl.com/bw9mbj72";
        break;

      case "James Madison":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/256.png";
        team.TeamMascot = "Dukes";
        team.MascotName = "Duke Dog";
        team.ColorCodes = [["Purple", "#450084"], ["Gold", "#CAA84A"]];
        team.MascotImage = "https://tinyurl.com/mrxxwnjz";
        break;

      case "J'Ville St":
      case "J'Ville State":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/55.png";
        team.TeamMascot = "Gamecocks";
        team.MascotName = "Cocky the Gamecock";
        team.ColorCodes = [["Red", "#CC0000"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/5c9vkpxc";
        break;

      case "Kansas":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2305.png";
        team.TeamMascot = "Jayhawks";
        team.MascotName = "Big Jay and Baby Jay";
        team.ColorCodes = [["Blue", "#0051A5"], ["Crimson", "#E8000D"]];
        team.MascotImage = "https://theheismanwinners.com/wp-content/uploads/kansas.jpg";
        break;

      case "Kansas St":
      case "Kansas State":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2306.png";
        team.TeamMascot = "Wildcats";
        team.MascotName = "Willie the Wildcat";
        team.ColorCodes = [["Royal Purple", "#512888"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/5n724fds";
        break;

      case "Kennesaw St":
      case "Kennesaw State":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/338.png";
        team.TeamMascot = "Owls";
        team.MascotName = "Scrappy the Owl";
        team.ColorCodes = [["Black", "#000000"], ["Gold", "#C5A028"]];
        team.MascotImage = "https://tinyurl.com/2ry3ur6u";
        break;

      case "Kent St":
      case "Kent State":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2309.png";
        team.TeamMascot = "Golden Flashes";
        team.MascotName = "Flash";
        team.ColorCodes = [["Navy Blue", "#002664"], ["Gold", "#EAB020"]];
        team.MascotImage = "https://tinyurl.com/4j2cd898";
        break;

      case "Kentucky":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/96.png";
        team.TeamMascot = "Wildcats";
        team.MascotName = "The Wildcat";
        team.ColorCodes = [["Kentucky Blue", "#0033A0"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/yjuuxpe5";
        break;

      case "Lehigh":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2329.png";
        team.TeamMascot = "Mountain Hawks";
        team.MascotName = "Clutch the Mountain Hawk";
        team.ColorCodes = [["Brown", "#6B3A2A"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/m9k7y8k4";
        break;
 
      case "Liberty":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2335.png";
        team.TeamMascot = "Flames";
        team.MascotName = "Sparky the Eagle";
        team.ColorCodes = [["Red", "#990000"], ["Blue", "#002868"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/yyfmc8dm";
        break;

      case "Lipscomb":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/288.png";
        team.TeamMascot = "Bisons";
        team.MascotName = "Lou Bison";
        team.ColorCodes = [["Purple", "#582C83"], ["Gold", "#F0B323"]];
        team.MascotImage = "https://tinyurl.com/t9dy7ur8";
        break;

      case "LIU":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/112358.png";
        team.TeamMascot = "Sharks";
        team.MascotName = "Vin the Shark";
        team.ColorCodes = [["Blue", "#003082"], ["Gold", "#C5A028"]];
        team.MascotImage = "https://tinyurl.com/bdh7snys";
        break;
 
      case "Long Beach St":
      case "Long Beach State":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/299.png";
        team.TeamMascot = "49ers";
        team.MascotName = "Elbee";
        team.ColorCodes = [["Black", "#000000"], ["Gold", "#C5A028"]];
        team.MascotImage = "https://tinyurl.com/mxccx9c7";
        break;

      case "Longwood":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2344.png";
        team.TeamMascot = "Lancers";
        team.MascotName = "Elwood";
        team.ColorCodes = [["Blue", "#003082"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/m228792h";
        break;

      case "Louisiana":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/309.png";
        team.TeamMascot = "Ragin' Cajuns";
        team.MascotName = "Cayenne";
        team.ColorCodes = [["Vermillion", "#CE1126"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/mwksxpwy";
        break;

      case "Louisville":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/97.png";
        team.TeamMascot = "Cardinals";
        team.MascotName = "Louie the Cardinal";
        team.ColorCodes = [["Cardinal Red", "#AD0000"], ["Black", "#000000"]];
        team.MascotImage = "https://tinyurl.com/yxnsbv9r";
        break;

      case "Loyola Chicago":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/282.png";
        team.TeamMascot = "Ramblers";
        team.MascotName = "Lu Wolf";
        team.ColorCodes = [["Maroon", "#6B0C27"], ["Gold", "#C5A028"]];
        team.MascotImage = "https://tinyurl.com/2m8ktb29";
        break;

      case "LSU":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/99.png";
        team.TeamMascot = "Tigers";
        team.MascotName = "Mike the Tiger";
        team.ColorCodes = [["Purple", "#461D7C"], ["Gold", "#FDD023"]];
        team.MascotImage = "https://tinyurl.com/m5p358dh";
        break;

      case "Marquette":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/269.png";
        team.TeamMascot = "Golden Eagles";
        team.MascotName = "Golden Eagle";
        team.ColorCodes = [["Blue", "#003366"], ["Gold", "#FFC229"]];
        team.MascotImage = "https://tinyurl.com/y3a644tm";
        break;

      case "Maryland":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/120.png";
        team.TeamMascot = "Terrapins";
        team.MascotName = "Testudo";
        team.ColorCodes = [["Red", "#E03A3E"], ["Gold", "#FFD520"], ["Black", "#000000"]];
        team.MascotImage = "https://tinyurl.com/mpyk6w2f";
        break;

      case "McNeese":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2377.png";
        team.TeamMascot = "Cowboys";
        team.MascotName = "Rowdy";
        team.ColorCodes = [["Royal Blue", "#003087"], ["Gold", "#FFC72C"]];
        team.MascotImage = "https://tinyurl.com/57s9982c";
        break;

      case "Memphis":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/235.png";
        team.TeamMascot = "Tigers";
        team.MascotName = "TOM";
        team.ColorCodes = [["Memphis Blue", "#003087"], ["Gray", "#898D8D"]];
        team.MascotImage = "https://tinyurl.com/3jjbhhuc";
        break;

      case "Miami":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2390.png";
        team.TeamMascot = "Hurricanes";
        team.MascotName = "Sebastian the Ibis";
        team.ColorCodes = [["Orange", "#F47321"], ["Green", "#005030"]];
        team.MascotImage = "https://tinyurl.com/msnfy7sp";
        break;

      case "Miami OH":
      case "Miami (OH)":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/193.png";
        team.TeamMascot = "RedHawks";
        team.MascotName = "Swoop the RedHawk";
        team.ColorCodes = [["Red", "#B61E2E"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/5cbrtr3m";
        break;
 
      case "Michigan":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/130.png";
        team.TeamMascot = "Wolverines";
        team.MascotName = "None";
        team.ColorCodes = [["Maize", "#FFCB05"], ["Blue", "#00274C"]];
        team.MascotImage = "";
        break;

      case "Michigan St":
      case "Michigan State":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/127.png";
        team.TeamMascot = "Spartans";
        team.MascotName = "Sparty";
        team.ColorCodes = [["Spartan Green", "#18453B"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/5a8bsw4z";
        break;

      case "Mississippi St":
      case "Mississippi State":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/344.png";
        team.TeamMascot = "Bulldogs";
        team.MascotName = "Bully";
        team.ColorCodes = [["Maroon", "#660000"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/4h54b36m";
        break;

      case "Missouri":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/142.png";
        team.TeamMascot = "Tigers";
        team.MascotName = "Truman the Tiger";
        team.ColorCodes = [["Mizzou Gold", "#F1B82D"], ["Black", "#000000"]];
        team.MascotImage = "https://tinyurl.com/57anrkw8";
        break;

      case "Montana":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/149.png";
        team.TeamMascot = "Grizzlies";
        team.MascotName = "Monte the Grizzly Bear";
        team.ColorCodes = [["Maroon", "#660033"], ["Silver", "#999999"]];
        team.MascotImage = "https://tinyurl.com/58669sbd";
        break;

      case "Montana St":
      case "Montana State":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/147.png";
        team.TeamMascot = "Bobcats";
        team.MascotName = "Champ";
        team.ColorCodes = [["Blue", "#003A70"], ["Gold", "#C5A028"]];
        team.MascotImage = "https://tinyurl.com/yrsyjx9k";
        break;

      case "Morehead St":
      case "Morehead State":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2413.png";
        team.TeamMascot = "Eagles";
        team.MascotName = "Beaker";
        team.ColorCodes = [["Blue", "#003082"], ["Gold", "#C5A028"]];
        team.MascotImage = "https://tinyurl.com/3w427shu";
        break;

      case "Mount St Marys":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/377.png";
        team.TeamMascot = "Mountaineers";
        team.MascotName = "Emmit S. Burg";
        team.ColorCodes = [["Blue", "#002855"], ["Bronze", "#84754E"]];
        team.MascotImage = "https://tinyurl.com/4rfyjftk";
        break;

      case "Murray St":
      case "Murray State":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/93.png";
        team.TeamMascot = "Racers";
        team.MascotName = "Racer One, Dunker";
        team.ColorCodes = [["Navy", "#002147"], ["Gold", "#C5A028"]];
        team.MascotImage = "https://tinyurl.com/4cpby7kf";
        break;

      case "N Kentucky":
      case "Northern Kentucky":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2957.png";
        team.TeamMascot = "Norse";
        team.MascotName = "Victor E. Viking";
        team.ColorCodes = [["Black", "#000000"], ["Gold", "#C5A028"]];
        team.MascotImage = "https://tinyurl.com/e2jv6ar5";
        break;

      case "NC St":
      case "NC State":
      case "North Carolina St":
      case "North Carolina State":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/152.png";
        team.TeamMascot = "Wolfpack";
        team.MascotName = "Mr. and Mrs. Wuf";
        team.ColorCodes = [["Red", "#CC0000"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/y2yx7f2x";
        break;

      case "Nebraska":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/158.png";
        team.TeamMascot = "Cornhuskers";
        team.MascotName = "Herbie Husker";
        team.ColorCodes = [["Scarlet", "#E41C38"], ["Cream", "#F5E6D0"]];
        team.MascotImage = "https://tinyurl.com/25w6f9r4";
        break;

      case "Nevada":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2440.png";
        team.TeamMascot = "Wolf Pack";
        team.MascotName = "Alphie, Luna, and Wolfie Jr";
        team.ColorCodes = [["Navy Blue", "#003366"], ["Silver", "#8D9093"]];
        team.MascotImage = "https://tinyurl.com/bdhwdkt4";
        break;

      case "New Mexico":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/167.png";
        team.TeamMascot = "Lobos";
        team.MascotName = "Lobo Louie and Lobo Lucy";
        team.ColorCodes = [["Cherry", "#BA0C2F"], ["Silver", "#A9A9A9"]];
        team.MascotImage = "https://tinyurl.com/mt87cbm4";
        break;

      case "New Mexico St":
      case "New Mexico State":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/166.png";
        team.TeamMascot = "Aggies";
        team.MascotName = "Pistol Pete";
        team.ColorCodes = [["Crimson", "#8B0000"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/bddbhwz9";
        break;

      case "Norfolk St":
      case "Norfolk State":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2456.png";
        team.TeamMascot = "Spartans";
        team.MascotName = "Spiro the Spartan";
        team.ColorCodes = [["Green", "#006633"], ["Gold", "#CDA323"]];
        team.MascotImage = "https://tinyurl.com/bdfh2kkm";
        break;

      case "North Carolina":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/153.png";
        team.TeamMascot = "Tar Heels";
        team.MascotName = "Rameses";
        team.ColorCodes = [["Carolina Blue", "#4B9CD3"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/4rnd6d37";
        break;

      case "North Dakota St":
      case "North Dakota State":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2449.png";
        team.TeamMascot = "Bison";
        team.MascotName = "Thundar the Bison";
        team.ColorCodes = [["Green", "#005030"], ["Yellow", "#FFC72C"]];
        team.MascotImage = "https://tinyurl.com/2bx3a4be";
        break;
 
      case "Northern Iowa":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2460.png";
        team.TeamMascot = "Panthers";
        team.MascotName = "TC the Panther";
        team.ColorCodes = [["Purple", "#4B116F"], ["Gold", "#FFCD00"]];
        team.MascotImage = "https://tinyurl.com/3jsjcj89";
        break;
 
      case "Northwestern":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/77.png";
        team.TeamMascot = "Wildcats";
        team.MascotName = "Willie the Wildcat";
        team.ColorCodes = [["Purple", "#4E2A84"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/2f8px3p5";
        break;

      case "Notre Dame":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/87.png";
        team.TeamMascot = "Fighting Irish";
        team.MascotName = "Leprechaun";
        team.ColorCodes = [["Navy Blue", "#0C2340"], ["Gold", "#C99700"]];
        team.MascotImage = "https://tinyurl.com/58y9etbf";
        break;

      case "Oakland":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2471.png";
        team.TeamMascot = "Athletics";
        team.MascotName = "Stomper";
        team.ColorCodes = [["Gold", "#C5A028"], ["Black", "#000000"]];
        team.MascotImage = "https://tinyurl.com/d7crzz6s";
        break;

      case "Ohio St":
      case "Ohio State":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/194.png";
        team.TeamMascot = "Buckeyes";
        team.MascotName = "Brutus";
        team.ColorCodes = [["Scarlet", "#BB0000"], ["Gray", "#666666"]];
        team.MascotImage = "https://tinyurl.com/4pptx8m9";
        break;

      case "Oklahoma":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/201.png";
        team.TeamMascot = "Sooners";
        team.MascotName = "Boomer and Sooner";
        team.ColorCodes = [["Crimson", "#841617"], ["Cream", "#FDF9D8"]];
        team.MascotImage = "https://tinyurl.com/49trmfcx";
        break;

      case "Ole Miss":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/145.png";
        team.TeamMascot = "Rebels";
        team.MascotName = "Tony the Landshark";
        team.ColorCodes = [["Cardinal Red", "#CE1126"], ["Navy Blue", "#14213D"]];
        team.MascotImage = "https://tinyurl.com/54ff3t5b";
        break;

      case "Omaha":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/3144.png";
        team.TeamMascot = "Mavericks";
        team.MascotName = "Durango";
        team.ColorCodes = [["Black", "#000000"], ["Red", "#D71920"]];
        team.MascotImage = "https://tinyurl.com/3kkd8y6c";
        break;

      case "Oral Roberts":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/197.png";
        team.TeamMascot = "Golden Eagles";
        team.MascotName = "Eli";
        team.ColorCodes = [["Navy Blue", "#002147"], ["Gold", "#C5A028"]];
        team.MascotImage = "https://tinyurl.com/yc2pt8ej";
        break;

      case "Oregon":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2483.png";
        team.TeamMascot = "Ducks";
        team.MascotName = "The Oregon Duck";
        team.ColorCodes = [["Green", "#154733"], ["Yellow", "#FEE123"]];
        team.MascotImage = "https://tinyurl.com/pcyany7y";
        break;

      case "Penn":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/219.png";
        team.TeamMascot = "Quakers";
        team.MascotName = "The Quaker";
        team.ColorCodes = [["Red", "#990000"], ["Blue", "#011F5B"]];
        team.MascotImage = "https://tinyurl.com/um32v2c9";
        break;
 
      case "Penn St":
      case "Penn State":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/213.png";
        team.TeamMascot = "Nittany Lions";
        team.MascotName = "Nittany Lion";
        team.ColorCodes = [["Navy Blue", "#001E44"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/24rcu7dn";
        break;

      case "Prairie View AM":
      case "Prairie View A&M":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2504.png";
        team.TeamMascot = "Panthers";
        team.MascotName = "Bubba the Panther";
        team.ColorCodes = [["Purple", "#4B116F"], ["Gold", "#FFCD00"]];
        team.MascotImage = "https://tinyurl.com/44543ft9";
        break;
 
      case "Princeton":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/163.png";
        team.TeamMascot = "Tigers";
        team.MascotName = "The Tiger";
        team.ColorCodes = [["Orange", "#E77500"], ["Black", "#000000"]];
        team.MascotImage = "https://tinyurl.com/2s46ujwx";
        break;

      case "Providence":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2507.png";
        team.TeamMascot = "Friars";
        team.MascotName = "Friar Dom";
        team.ColorCodes = [["Black", "#000000"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/yc6jze4f";
        break;

      case "Purdue":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2509.png";
        team.TeamMascot = "Boilermakers";
        team.MascotName = "Boilermaker Special";
        team.ColorCodes = [["Old Gold", "#CFB991"], ["Black", "#000000"]];
        team.MascotImage = "https://tinyurl.com/37rs5ewv";
        break;

      case "Queens":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2511.png";
        team.TeamMascot = "Royals";
        team.MascotName = "Royal";
        team.ColorCodes = [["Royal Blue", "#003082"], ["Gold", "#C5A028"]];
        team.MascotImage = "https://tinyurl.com/5h9zps4r";
        break;
 
      case "Richmond":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/257.png";
        team.TeamMascot = "Spiders";
        team.MascotName = "WebstUR the Spider";
        team.ColorCodes = [["Red", "#CC0000"], ["Blue", "#003082"]];
        team.MascotImage = "https://tinyurl.com/wzzcx6px";
        break;

      case "Robert Morris":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2523.png";
        team.TeamMascot = "Colonials";
        team.MascotName = "RoMo";
        team.ColorCodes = [["Blue", "#14234b"], ["Red", "#a6192e"]];
        team.MascotImage = "https://tinyurl.com/bdes5dv8";
        break;

      case "Rutgers":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/164.png";
        team.TeamMascot = "Scarlet Knights";
        team.MascotName = "Scarlet Knight";
        team.ColorCodes = [["Scarlet", "#CC0033"], ["Gray", "#8C8C8C"]];
        team.MascotImage = "https://tinyurl.com/bde3px7t";
        break;

      case "Saint Louis":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/139.png";
        team.TeamMascot = "Billikens";
        team.MascotName = "The Billiken";
        team.ColorCodes = [["Royal Blue", "#003082"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/ytzryk36";
        break;
 
      case "Santa Clara":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2541.png";
        team.TeamMascot = "Broncos";
        team.MascotName = "The Bronco";
        team.ColorCodes = [["Red", "#862633"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/4uwa3swk";
        break;
 
      case "S Dakota St":
      case "S Dakota State":
      case "South Dakota St":
      case "South Dakota State":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2571.png";
        team.TeamMascot = "Jackrabbits";
        team.MascotName = "Jack the Jackrabbit";
        team.ColorCodes = [["Blue", "#0033A0"], ["Yellow", "#FFD100"]];
        team.MascotImage = "https://tinyurl.com/bddfwv3n";
        break;

      case "Saint Mary's":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2608.png";
        team.TeamMascot = "Gaels";
        team.MascotName = "Gael Force One";
        team.ColorCodes = [["Navy", "#002060"], ["Red", "#BA0C2F"], ["Silver", "#A9A9A9"]];
        team.MascotImage = "https://tinyurl.com/f92xs2kj";
        break;

      case "Saint Peter's":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2619.png";
        team.TeamMascot = "Peacocks";
        team.MascotName = "Peacock";
        team.ColorCodes = [["Blue", "#003082"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/hmf9bck6";
        break;

      case "Samford":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2537.png";
        team.TeamMascot = "Bulldogs";
        team.MascotName = "Spike the Bulldog";
        team.ColorCodes = [["Blue", "#003082"], ["Red", "#CC0000"]];
        team.MascotImage = "https://tinyurl.com/46htwryz";
        break;

      case "San Diego St":
      case "San Diego State":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/21.png";
        team.TeamMascot = "Aztecs";
        team.MascotName = "Aztec Warrior";
        team.ColorCodes = [["Scarlet", "#A6192E"], ["Black", "#000000"]];
        team.MascotImage = "https://tinyurl.com/2uhujj7c";
        break;

      case "San Francisco":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2539.png";
        team.TeamMascot = "Dons";
        team.MascotName = "The Don";
        team.ColorCodes = [["Green", "#00693E"], ["Gold", "#C5A028"]];
        team.MascotImage = "https://tinyurl.com/2p8wb56c";
        break;

      case "Seton Hall":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2550.png";
        team.TeamMascot = "Pirates";
        team.MascotName = "The Pirate";
        team.ColorCodes = [["Blue", "#003082"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/2x2crxsh";
        break;

      case "Siena":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2561.png";
        team.TeamMascot = "Saints";
        team.MascotName = "Friar";
        team.ColorCodes = [["Green", "#215732"], ["Gold", "#C5A028"]];
        team.MascotImage = "https://tinyurl.com/3h2aarzp";
        break;
 
      case "SIUE":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2611.png";
        team.TeamMascot = "Cougars";
        team.MascotName = "Eddie the Cougar";
        team.ColorCodes = [["Red", "#EF3829"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/mv89644h";
        break;

      case "South Carolina":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2579.png";
        team.TeamMascot = "Gamecocks";
        team.MascotName = "Cocky";
        team.ColorCodes = [["Garnet", "#73000A"], ["Black", "#000000"]];
        team.MascotImage = "https://tinyurl.com/4dw7mrf2";
        break;

      case "SMU":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2567.png";
        team.TeamMascot = "Mustangs";
        team.MascotName = "Peruna the Mustang";
        team.ColorCodes = [["Red", "#CC0000"], ["Blue", "#354CA1"]];
        team.MascotImage = "https://tinyurl.com/44rd4uc9";
        break;
 
      case "South Florida":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/58.png";
        team.TeamMascot = "Bulls";
        team.MascotName = "Rocky the Bull";
        team.ColorCodes = [["Green", "#006747"], ["Gold", "#CFC493"]];
        team.MascotImage = "https://tinyurl.com/ysvn8jsr";
        break;
 
      case "St Francis PA":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2598.png";
        team.TeamMascot = "Red Flash";
        team.MascotName = "Frankie the Friar";
        team.ColorCodes = [["Red", "#BD1F25"], ["Dark Red", "#790000"]];
        team.MascotImage = "https://tinyurl.com/4c8ek3wr";
        break;

      case "St John's":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2599.png";
        team.TeamMascot = "Red Storm";
        team.MascotName = "Johnny Thunderbird";
        team.ColorCodes = [["Red", "#BA0C2F"], ["Blue", "#041C2C"]];
        team.MascotImage = "https://tinyurl.com/5wbhc5nk";
        break;

      case "Stetson":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2437.png";
        team.TeamMascot = "Hatters";
        team.MascotName = "John B";
        team.ColorCodes = [["Green", "#215732"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/3yxd68sx";
        break;

      case "TCU":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2628.png";
        team.TeamMascot = "Horned Frogs";
        team.MascotName = "Superfrog";
        team.ColorCodes = [["Purple", "#4D1979"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/3rxcw2ak";
        break;

      case "Tennessee":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2633.png";
        team.TeamMascot = "Volunteers";
        team.MascotName = "Smokey";
        team.ColorCodes = [["Tennessee Orange", "#FF8200"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/49a9f9tx";
        break;

      case "Tennessee St":
      case "Tennessee State":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2634.png";
        team.TeamMascot = "Tigers";
        team.MascotName = "Aristocat the Tiger";
        team.ColorCodes = [["Blue", "#003082"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/36c8knvt";
        break;
 
      case "Texas":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/251.png";
        team.TeamMascot = "Longhorns";
        team.MascotName = "Bevo";
        team.ColorCodes = [["Burnt Orange", "#BF5700"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/y3xyxdfv";
        break;

      case "Texas A&M":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/245.png";
        team.TeamMascot = "Aggies";
        team.MascotName = "Reveille";
        team.ColorCodes = [["Maroon", "#500000"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/h98hmjeb";
        break;

      case "Texas A&M CC":
      case "Texas A&M Corpus Christi":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/357.png";
        team.TeamMascot = "Islanders";
        team.MascotName = "Izzy the Islander";
        team.ColorCodes = [["Royal Blue", "#003087"], ["Green", "#00703C"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/25ky4hyc";
        break;

      case "Texas Southern":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2640.png";
        team.TeamMascot = "Tigers";
        team.MascotName = "Tiger";
        team.ColorCodes = [["Maroon", "#660000"], ["Gray", "#999999"]];
        team.MascotImage = "https://tinyurl.com/zuw9ntf8";
        break;

      case "Texas Tech":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2641.png";
        team.TeamMascot = "Red Raiders";
        team.MascotName = "Masked Rider, Raider Red";
        team.ColorCodes = [["Scarlet", "#CC0000"], ["Black", "#000000"]];
        team.MascotImage = "https://tinyurl.com/5cjtzbp2";
        break;

      case "Troy":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2653.png";
        team.TeamMascot = "Trojans";
        team.MascotName = "T-Roy";
        team.ColorCodes = [["Red", "#8A2432"], ["Grey", "#B3B5B8"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/2xsxcu6m";
        break;

      case "UAB":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/5.png";
        team.TeamMascot = "Blazers";
        team.MascotName = "Blaze the Dragon";
        team.ColorCodes = [["Green", "#1E6B52"], ["Gold", "#C5A028"]];
        team.MascotImage = "https://tinyurl.com/yhjac9xs";
        break;

      case "UCF":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2116.png";
        team.TeamMascot = "Knights";
        team.MascotName = "Knightro the Knight";
        team.ColorCodes = [["Black", "#000000"], ["Gold", "#FFC904"]];
        team.MascotImage = "https://tinyurl.com/43yfjmb3";
        break;
 
      case "UC San Diego":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/28.png";
        team.TeamMascot = "Tritons";
        team.MascotName = "King Triton";
        team.ColorCodes = [["Blue", "#00629B"], ["Gold", "#FFD200"]];
        team.MascotImage = "https://tinyurl.com/mum2u7xb";
        break;

      case "UCSB":
      case "UC Santa Barbara":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2549.png";
        team.TeamMascot = "Gauchos";
        team.MascotName = "Olé";
        team.ColorCodes = [["Blue", "#003660"], ["Gold", "#FEBC11"]];
        team.MascotImage = "https://tinyurl.com/4n93v48b";
        break;

      case "UCLA":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/26.png";
        team.TeamMascot = "Bruins";
        team.MascotName = "Joe Bruin";
        team.ColorCodes = [["True Blue", "#2D68C4"], ["Gold", "#F2A900"]];
        team.MascotImage = "https://tinyurl.com/88auedfm";
        break;

      case "UConn":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/41.png";
        team.TeamMascot = "Huskies";
        team.MascotName = "Jonathan the Husky";
        team.ColorCodes = [["Navy Blue", "#000E2F"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/yrhnkz75";
        break;

      case "UMBC":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2378.png";
        team.TeamMascot = "Retrievers";
        team.MascotName = "True Grit";
        team.ColorCodes = [["Black", "#000000"], ["Gold", "#F0B323"]];
        team.MascotImage = "https://tinyurl.com/yc52rbws";
        break;
 
      case "UNC Asheville":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2436.png";
        team.TeamMascot = "Bulldogs";
        team.MascotName = "Rocky the Bulldog";
        team.ColorCodes = [["Royal Blue", "#003082"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/mumwr25f";
        break;

      case "UNC Wilmington":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/253.png";
        team.TeamMascot = "Seahawks";
        team.MascotName = "Sammy C. Hawk";
        team.ColorCodes = [["Blue", "#003366"], ["Teal", "#006666"]];
        team.MascotImage = "https://tinyurl.com/m24thycw";
        break;

      case "USC":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/30.png";
        team.TeamMascot = "Trojans";
        team.MascotName = "Traveler";
        team.ColorCodes = [["Cardinal", "#990000"], ["Gold", "#FFCC00"]];
        team.MascotImage = "https://tinyurl.com/4xyxdb8u";
        break;

      case "Utah St":
      case "Utah State":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/328.png";
        team.TeamMascot = "Aggies";
        team.MascotName = "Big Blue";
        team.ColorCodes = [["Navy", "#00285E"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/mwwn9wy5";
        break;

      case "Vanderbilt":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/238.png";
        team.TeamMascot = "Commodores";
        team.MascotName = "Mr. Commodore";
        team.ColorCodes = [["Black", "#000000"], ["Old Gold", "#866D4B"]];
        team.MascotImage = "https://tinyurl.com/2p9p8p36";
        break;

      case "VCU":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2670.png";
        team.TeamMascot = "Rams";
        team.MascotName = "Rodney the Ram";
        team.ColorCodes = [["Black", "#000000"], ["Gold", "#C4A44A"]];
        team.MascotImage = "https://tinyurl.com/59jwxhw5";
        break;

      case "Vermont":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/261.png";
        team.TeamMascot = "Catamounts";
        team.MascotName = "Rally";
        team.ColorCodes = [["Green", "#154734"], ["Gold", "#C5A028"]];
        team.MascotImage = "https://tinyurl.com/5n72ptts";
        break;

      case "Villanova":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/222.png";
        team.TeamMascot = "Wildcats";
        team.MascotName = "Will D. Cat";
        team.ColorCodes = [["Navy Blue", "#00205B"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/2xrvbr77";
        break;

      case "Virginia":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/258.png";
        team.TeamMascot = "Cavaliers";
        team.MascotName = "Cavalier";
        team.ColorCodes = [["Blue", "#232D4B"], ["Orange", "#E57200"]];
        team.MascotImage = "https://tinyurl.com/4rd2ed32";
        break;

      case "Virginia Tech":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/259.png";
        team.TeamMascot = "Hokies";
        team.MascotName = "HokieBird";
        team.ColorCodes = [["Maroon", "#660000"], ["Burnt Orange", "#CF4420"]];
        team.MascotImage = "https://tinyurl.com/yckxm29p";
        break;

      case "Washington St":
      case "Washington State":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/265.png";
        team.TeamMascot = "Cougars";
        team.MascotName = "Butch T. Cougar";
        team.ColorCodes = [["Crimson", "#981E32"], ["Gray", "#5E6A71"]];
        team.MascotImage = "https://tinyurl.com/2dwv8xh8";
        break;

      case "West Virginia":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/277.png";
        team.TeamMascot = "Mountaineers";
        team.MascotName = "The Mountaineer";
        team.ColorCodes = [["Old Gold", "#EAAA00"], ["Blue", "#002855"]];
        team.MascotImage = "https://tinyurl.com/mrx6499a";
        break;

      case "Western KY":
      case "Western Kentucky":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/98.png";
        team.TeamMascot = "Hilltoppers";
        team.MascotName = "Big Red";
        team.ColorCodes = [["Red", "#C8102E"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/mpaz84db";
        break;

      case "Wisconsin":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/275.png";
        team.TeamMascot = "Badgers";
        team.MascotName = "Bucky Badger";
        team.ColorCodes = [["Cardinal Red", "#C5050C"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/bde9tntk";
        break;

      case "Wofford":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2562.png";
        team.TeamMascot = "Terriers";
        team.MascotName = "Boss, Terri and Blitz";
        team.ColorCodes = [["Old Gold", "#886E4C"], ["Black", "#000000"]];
        team.MascotImage = "https://tinyurl.com/2ujcwpj7";
        break;

      case "Wright St":
      case "Wright State":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2750.png";
        team.TeamMascot = "Raiders";
        team.MascotName = "Rowdy Raider";
        team.ColorCodes = [["Green", "#006338"], ["Gold", "#C5A028"]];
        team.MascotImage = "https://tinyurl.com/y9rtvshn";
        break;

      case "Wyoming":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2751.png";
        team.TeamMascot = "Cowboys";
        team.MascotName = "Cowboy Joe";
        team.ColorCodes = [["Brown", "#492F24"], ["Gold", "#FFC425"]];
        team.MascotImage = "https://tinyurl.com/89zfh574";
        break;

      case "Xavier":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2752.png";
        team.TeamMascot = "Musketeers";
        team.MascotName = "D'Artagnan and the Blue Blob";
        team.ColorCodes = [["Navy Blue", "#0C2340"], ["Gold", "#9E7E38"]];
        team.MascotImage = "https://tinyurl.com/28yz6zcd";
        break;

      case "Yale":
        team.Logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/43.png";
        team.TeamMascot = "Bulldogs";
        team.MascotName = "Handsome Dan";
        team.ColorCodes = [["Yale Blue", "#00356B"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/3rs4y7np";
        break;

      // ── template for new entries ──────────────────────────────────────────
      // case "TEAMNAME":
      //   team.Logo = "";
      //   team.TeamMascot = "";
      //   team.MascotName = "";
      //   team.ColorCodes = [["NAME", "#000000"], ["NAME", "#000000"]];
      //   team.MascotImage = "";
      //   break;


  } // end switch

}
