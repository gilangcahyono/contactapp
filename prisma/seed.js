const { PrismaClient } = require("../generated/prisma");

const prisma = new PrismaClient();

async function main() {
  await prisma.contact.createMany({
    data: [
      {
        name: "Leelah Ferreli",
        mobile: "081150324848",
      },
      {
        name: "Daphene Enevoldsen",
        mobile: "086289604570",
      },
      {
        name: "Riordan Avrasin",
        mobile: "085784376993",
      },
      {
        name: "Normy Sanbrook",
        mobile: "089065367306",
      },
      {
        name: "Di McKniely",
        mobile: "086589698376",
      },
      {
        name: "Murvyn Darkott",
        mobile: "088134601294",
      },
      {
        name: "Granger Huby",
        mobile: "081551595311",
      },
      {
        name: "Jannel Klimt",
        mobile: "081181743699",
      },
      {
        name: "Verine Holsey",
        mobile: "083054910288",
      },
      {
        name: "Abie Jaulmes",
        mobile: "081571775277",
      },
      {
        name: "Cherin Tredget",
        mobile: "086888311147",
      },
      {
        name: "Lou Bulch",
        mobile: "082593714077",
      },
      {
        name: "Dotti Flieg",
        mobile: "089179309690",
      },
      {
        name: "Josi Shorter",
        mobile: "085211070283",
      },
      {
        name: "Nan Colisbe",
        mobile: "087391710776",
      },
      {
        name: "Denney Cubbon",
        mobile: "080020121490",
      },
      {
        name: "Willette Ricoald",
        mobile: "082939765839",
      },
      {
        name: "Peggi Kenford",
        mobile: "088444829838",
      },
      {
        name: "Tommie Jankovsky",
        mobile: "082338813561",
      },
      {
        name: "Lil Sandeland",
        mobile: "085000959620",
      },
      {
        name: "Ave Wetherhead",
        mobile: "082558666037",
      },
      {
        name: "Aristotle Edmonson",
        mobile: "080415354528",
      },
      {
        name: "Joli Scrace",
        mobile: "085656455173",
      },
      {
        name: "Goldina Firebrace",
        mobile: "082661824073",
      },
      {
        name: "Seamus Anglin",
        mobile: "083099706337",
      },
      {
        name: "Marga Vallis",
        mobile: "084866697237",
      },
      {
        name: "Isa Gidney",
        mobile: "089064009759",
      },
      {
        name: "Kettie McKechnie",
        mobile: "084566895467",
      },
      {
        name: "Mervin Manoch",
        mobile: "087442436889",
      },
      {
        name: "Eleanore Phillips",
        mobile: "080452715601",
      },
      {
        name: "Zonda Coggell",
        mobile: "089716800223",
      },
      {
        name: "Laurens Hadley",
        mobile: "088457903209",
      },
      {
        name: "Luisa Swede",
        mobile: "085645020707",
      },
      {
        name: "Ingeberg Bottoms",
        mobile: "088938897303",
      },
      {
        name: "Jon Hatchell",
        mobile: "082070705943",
      },
      {
        name: "Ilario Dibnah",
        mobile: "086063254684",
      },
      {
        name: "Eliza Sainz",
        mobile: "086308909378",
      },
      {
        name: "Olenka Stockow",
        mobile: "082573874338",
      },
      {
        name: "Kiele Conaghy",
        mobile: "088557694679",
      },
      {
        name: "Kati Arbon",
        mobile: "086653736164",
      },
      {
        name: "Charissa Pallister",
        mobile: "085217003812",
      },
      {
        name: "Spence Fforde",
        mobile: "088933981195",
      },
      {
        name: "Gilbertine Cozins",
        mobile: "087568651088",
      },
      {
        name: "Brunhilda Drable",
        mobile: "089534836222",
      },
      {
        name: "Rowney Farnall",
        mobile: "086645302193",
      },
      {
        name: "Hermie Stow",
        mobile: "082012333362",
      },
      {
        name: "Wilhelmine Loxdale",
        mobile: "082823207376",
      },
      {
        name: "Danila Velde",
        mobile: "084467272992",
      },
      {
        name: "Opal Rubenczyk",
        mobile: "081466494980",
      },
      {
        name: "Lisbeth Telfer",
        mobile: "083859037668",
      },
      {
        name: "Hilary Fearn",
        mobile: "082376770637",
      },
      {
        name: "Smitty Ethington",
        mobile: "088827054677",
      },
      {
        name: "Cristobal Voaden",
        mobile: "088118081761",
      },
      {
        name: "Judon Richly",
        mobile: "080770564046",
      },
      {
        name: "Laetitia Ragat",
        mobile: "089096040120",
      },
      {
        name: "Diann Scouse",
        mobile: "085236759552",
      },
      {
        name: "Buiron Laphorn",
        mobile: "085820377583",
      },
      {
        name: "Daphene Adey",
        mobile: "081914645677",
      },
      {
        name: "Stacy Haith",
        mobile: "088890276622",
      },
      {
        name: "Lissy Coatts",
        mobile: "085086361664",
      },
      {
        name: "Jeremias Logan",
        mobile: "083791921797",
      },
      {
        name: "Olivie Adan",
        mobile: "080223292966",
      },
      {
        name: "Laureen Thieme",
        mobile: "084867367761",
      },
      {
        name: "Katina Bonaire",
        mobile: "080176982027",
      },
      {
        name: "Tibold Longmaid",
        mobile: "083137023963",
      },
      {
        name: "Kristina Duchart",
        mobile: "087272930780",
      },
      {
        name: "Currie Hiddy",
        mobile: "088470252798",
      },
      {
        name: "Vikki Rodear",
        mobile: "082548309304",
      },
      {
        name: "Alis Lindermann",
        mobile: "084577205793",
      },
      {
        name: "Rickert Bruins",
        mobile: "083430987628",
      },
      {
        name: "Hettie McCarron",
        mobile: "080701798688",
      },
      {
        name: "Blakeley Gummie",
        mobile: "082721168517",
      },
      {
        name: "Fredi Eslinger",
        mobile: "085720558977",
      },
      {
        name: "Glennie Borrowman",
        mobile: "080312706103",
      },
      {
        name: "Clywd Grayshon",
        mobile: "089867390008",
      },
      {
        name: "Thedrick Summerbell",
        mobile: "081790703433",
      },
      {
        name: "Bobby Lazer",
        mobile: "081026797233",
      },
      {
        name: "Kerry Brookes",
        mobile: "088296439298",
      },
      {
        name: "Torrin Blankhorn",
        mobile: "088493694738",
      },
      {
        name: "Abigail Inggall",
        mobile: "088885485286",
      },
      {
        name: "Adolph Macieja",
        mobile: "088020994947",
      },
      {
        name: "Berkeley Jouning",
        mobile: "084456233362",
      },
      {
        name: "Modesta Serchwell",
        mobile: "080597290253",
      },
      {
        name: "Zorine Dye",
        mobile: "084214311205",
      },
      {
        name: "Roldan Loveguard",
        mobile: "087658922072",
      },
      {
        name: "Andree Fell",
        mobile: "085619557332",
      },
      {
        name: "Steffi Sikora",
        mobile: "088562825077",
      },
      {
        name: "Codie Ousby",
        mobile: "087018943906",
      },
      {
        name: "Kathie Maiklem",
        mobile: "081432563491",
      },
      {
        name: "Pennie Bootherstone",
        mobile: "086531192313",
      },
      {
        name: "Ray Oloshkin",
        mobile: "087642173083",
      },
      {
        name: "Teddi Texton",
        mobile: "081870262735",
      },
      {
        name: "Burl Aleksidze",
        mobile: "088294221856",
      },
      {
        name: "Berne Bridgland",
        mobile: "087917334627",
      },
      {
        name: "Jillane Maloney",
        mobile: "089302472663",
      },
      {
        name: "Karoline Haddock",
        mobile: "086592671866",
      },
      {
        name: "Bran Gambell",
        mobile: "085463613109",
      },
      {
        name: "Thurston Boarer",
        mobile: "080824210808",
      },
      {
        name: "Goldi Tockell",
        mobile: "085289878939",
      },
      {
        name: "Gaylord Farry",
        mobile: "081959511068",
      },
    ],
  });

  console.log("✅ Dummy data berhasil dibuat!");
}

main()
  .catch((e) => {
    console.error("❌ Gagal membuat data dummy:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
