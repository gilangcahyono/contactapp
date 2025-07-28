import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  await prisma.contact.createMany({
    data: [
      {
        name: "Leelah Ferreli",
        phone: "081150324848",
      },
      {
        name: "Daphene Enevoldsen",
        phone: "086289604570",
      },
      {
        name: "Riordan Avrasin",
        phone: "085784376993",
      },
      {
        name: "Normy Sanbrook",
        phone: "089065367306",
      },
      {
        name: "Di McKniely",
        phone: "086589698376",
      },
      {
        name: "Murvyn Darkott",
        phone: "088134601294",
      },
      {
        name: "Granger Huby",
        phone: "081551595311",
      },
      {
        name: "Jannel Klimt",
        phone: "081181743699",
      },
      {
        name: "Verine Holsey",
        phone: "083054910288",
      },
      {
        name: "Abie Jaulmes",
        phone: "081571775277",
      },
      {
        name: "Cherin Tredget",
        phone: "086888311147",
      },
      {
        name: "Lou Bulch",
        phone: "082593714077",
      },
      {
        name: "Dotti Flieg",
        phone: "089179309690",
      },
      {
        name: "Josi Shorter",
        phone: "085211070283",
      },
      {
        name: "Nan Colisbe",
        phone: "087391710776",
      },
      {
        name: "Denney Cubbon",
        phone: "080020121490",
      },
      {
        name: "Willette Ricoald",
        phone: "082939765839",
      },
      {
        name: "Peggi Kenford",
        phone: "088444829838",
      },
      {
        name: "Tommie Jankovsky",
        phone: "082338813561",
      },
      {
        name: "Lil Sandeland",
        phone: "085000959620",
      },
      {
        name: "Ave Wetherhead",
        phone: "082558666037",
      },
      {
        name: "Aristotle Edmonson",
        phone: "080415354528",
      },
      {
        name: "Joli Scrace",
        phone: "085656455173",
      },
      {
        name: "Goldina Firebrace",
        phone: "082661824073",
      },
      {
        name: "Seamus Anglin",
        phone: "083099706337",
      },
      {
        name: "Marga Vallis",
        phone: "084866697237",
      },
      {
        name: "Isa Gidney",
        phone: "089064009759",
      },
      {
        name: "Kettie McKechnie",
        phone: "084566895467",
      },
      {
        name: "Mervin Manoch",
        phone: "087442436889",
      },
      {
        name: "Eleanore Phillips",
        phone: "080452715601",
      },
      {
        name: "Zonda Coggell",
        phone: "089716800223",
      },
      {
        name: "Laurens Hadley",
        phone: "088457903209",
      },
      {
        name: "Luisa Swede",
        phone: "085645020707",
      },
      {
        name: "Ingeberg Bottoms",
        phone: "088938897303",
      },
      {
        name: "Jon Hatchell",
        phone: "082070705943",
      },
      {
        name: "Ilario Dibnah",
        phone: "086063254684",
      },
      {
        name: "Eliza Sainz",
        phone: "086308909378",
      },
      {
        name: "Olenka Stockow",
        phone: "082573874338",
      },
      {
        name: "Kiele Conaghy",
        phone: "088557694679",
      },
      {
        name: "Kati Arbon",
        phone: "086653736164",
      },
      {
        name: "Charissa Pallister",
        phone: "085217003812",
      },
      {
        name: "Spence Fforde",
        phone: "088933981195",
      },
      {
        name: "Gilbertine Cozins",
        phone: "087568651088",
      },
      {
        name: "Brunhilda Drable",
        phone: "089534836222",
      },
      {
        name: "Rowney Farnall",
        phone: "086645302193",
      },
      {
        name: "Hermie Stow",
        phone: "082012333362",
      },
      {
        name: "Wilhelmine Loxdale",
        phone: "082823207376",
      },
      {
        name: "Danila Velde",
        phone: "084467272992",
      },
      {
        name: "Opal Rubenczyk",
        phone: "081466494980",
      },
      {
        name: "Lisbeth Telfer",
        phone: "083859037668",
      },
      {
        name: "Hilary Fearn",
        phone: "082376770637",
      },
      {
        name: "Smitty Ethington",
        phone: "088827054677",
      },
      {
        name: "Cristobal Voaden",
        phone: "088118081761",
      },
      {
        name: "Judon Richly",
        phone: "080770564046",
      },
      {
        name: "Laetitia Ragat",
        phone: "089096040120",
      },
      {
        name: "Diann Scouse",
        phone: "085236759552",
      },
      {
        name: "Buiron Laphorn",
        phone: "085820377583",
      },
      {
        name: "Daphene Adey",
        phone: "081914645677",
      },
      {
        name: "Stacy Haith",
        phone: "088890276622",
      },
      {
        name: "Lissy Coatts",
        phone: "085086361664",
      },
      {
        name: "Jeremias Logan",
        phone: "083791921797",
      },
      {
        name: "Olivie Adan",
        phone: "080223292966",
      },
      {
        name: "Laureen Thieme",
        phone: "084867367761",
      },
      {
        name: "Katina Bonaire",
        phone: "080176982027",
      },
      {
        name: "Tibold Longmaid",
        phone: "083137023963",
      },
      {
        name: "Kristina Duchart",
        phone: "087272930780",
      },
      {
        name: "Currie Hiddy",
        phone: "088470252798",
      },
      {
        name: "Vikki Rodear",
        phone: "082548309304",
      },
      {
        name: "Alis Lindermann",
        phone: "084577205793",
      },
      {
        name: "Rickert Bruins",
        phone: "083430987628",
      },
      {
        name: "Hettie McCarron",
        phone: "080701798688",
      },
      {
        name: "Blakeley Gummie",
        phone: "082721168517",
      },
      {
        name: "Fredi Eslinger",
        phone: "085720558977",
      },
      {
        name: "Glennie Borrowman",
        phone: "080312706103",
      },
      {
        name: "Clywd Grayshon",
        phone: "089867390008",
      },
      {
        name: "Thedrick Summerbell",
        phone: "081790703433",
      },
      {
        name: "Bobby Lazer",
        phone: "081026797233",
      },
      {
        name: "Kerry Brookes",
        phone: "088296439298",
      },
      {
        name: "Torrin Blankhorn",
        phone: "088493694738",
      },
      {
        name: "Abigail Inggall",
        phone: "088885485286",
      },
      {
        name: "Adolph Macieja",
        phone: "088020994947",
      },
      {
        name: "Berkeley Jouning",
        phone: "084456233362",
      },
      {
        name: "Modesta Serchwell",
        phone: "080597290253",
      },
      {
        name: "Zorine Dye",
        phone: "084214311205",
      },
      {
        name: "Roldan Loveguard",
        phone: "087658922072",
      },
      {
        name: "Andree Fell",
        phone: "085619557332",
      },
      {
        name: "Steffi Sikora",
        phone: "088562825077",
      },
      {
        name: "Codie Ousby",
        phone: "087018943906",
      },
      {
        name: "Kathie Maiklem",
        phone: "081432563491",
      },
      {
        name: "Pennie Bootherstone",
        phone: "086531192313",
      },
      {
        name: "Ray Oloshkin",
        phone: "087642173083",
      },
      {
        name: "Teddi Texton",
        phone: "081870262735",
      },
      {
        name: "Burl Aleksidze",
        phone: "088294221856",
      },
      {
        name: "Berne Bridgland",
        phone: "087917334627",
      },
      {
        name: "Jillane Maloney",
        phone: "089302472663",
      },
      {
        name: "Karoline Haddock",
        phone: "086592671866",
      },
      {
        name: "Bran Gambell",
        phone: "085463613109",
      },
      {
        name: "Thurston Boarer",
        phone: "080824210808",
      },
      {
        name: "Goldi Tockell",
        phone: "085289878939",
      },
      {
        name: "Gaylord Farry",
        phone: "081959511068",
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
