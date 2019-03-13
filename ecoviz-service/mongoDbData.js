db.createCollection("organizations");
db.organizations.insert({
  "name": "Air France",
  "description": "Une compagnie aérienne",
  "locations": [
    {
      "street": "3 rue des arbres",
      "city": "Toulouse",
      "zipCode": "3100",
      "country": "France",
      "longitude": 1.433333,
      "latitude": 43.6
    }
  ],
  "tags": [
    {
      "id": "ecoviz:tag:1",
      "name": "Compagnie aérienne"
    },
    {
      "id": "ecoviz:country:FR",
      "name": "FR"
    }
  ]
});
db.organizations.insert({
  "name": "Boeing",
  "description": "Une compagnie aérienne",
  "locations": [
    {
      "street": "7755 E Marginal Way S",
      "city": "Seattle",
      "zipCode": "WA 98108",
      "country": "USA",
      "longitude": -122.311,
      "latitude": 45.532
    }
  ],
  "tags": [
    {
      "id": "ecoviz:project:1",
      "name": "Boeing 777 X"
    },
    {
      "id": "ecoviz:project:2",
      "name": "Boeing 737 Max"
    },
    {
      "id": "ecoviz:country:USA",
      "name": "USA"
    }
  ]
});
db.organizations.insert({
  "name": "SKY Airline",
  "description": "Une compagnie aérienne",
  "locations": [
    {
      "street": "Aviador David Fuentes",
      "city": "Pudahuel",
      "country": "Chile",
      "longitude": -70.793,
      "latitude": -33.389
    }
  ],
  "tags": [
    {
      "id": "ecoviz:tag:2",
      "name": "Construction d'avion"
    },
    {
      "id": "ecoviz:country:CHL",
      "name": "CHL"
    }
  ]
});
db.organizations.insert({
  "name": "Ethiopian Airlines",
  "description": "Une compagnie aérienne",
  "locations": [
    {
      "street": "Aeroport International Bolé",
      "city": "Addis-Adeba",
      "country": "Ethiopia",
      "longitude": 38.793,
      "latitude": 8.982
    }
  ],
  "tags": [
    {
      "id": "ecoviz:tag:3",
      "name": "Construction d'avion"
    },
    {
      "id": "ecoviz:membership:ethiopian",
      "name": "member"
    },
    {
      "id": "ecoviz:country:ETH",
      "name": "ETH"
    }
  ]
});
db.organizations.insert({
  "name": "Airbus",
  "description": "Construction d'avion",
  "locations": [
    {
      "street": "Rond-Point de la Crabe",
      "city": "Toulouse",
      "zipCode": "31300",
      "country": "France",
      "longitude": 1.372,
      "latitude": 43.610
    }
  ],
  "tags": [
    {
      "id": "ecoviz:tag:4",
      "name": "Construction d'avion"
    },
    {
      "id": "ecoviz:project:3",
      "name": "A220"
    },
    {
      "id": "ecoviz:project:4",
      "name": "A380-800"
    },
    {
      "id": "ecoviz:country:FR",
      "name": "FR"
    }
  ]
});
db.organizations.insert({
  "name": "COMAC",
  "description": "Construction d'avion",
  "locations": [
    {
      "street": "5 Yunjin Rd, Xuhui Qu",
      "city": "Shanghai Shi",
      "zipCode": "200000",
      "country": "Chine",
      "longitude": 121.458,
      "latitude": 31.174
    }
  ],
  "tags": [
    {
      "id": "ecoviz:tag:5",
      "name": "Construction d'avion"
    },
    {
      "id": "ecoviz:membership:comac",
      "name": "member"
    },
    {
      "id": "ecoviz:country:CHN",
      "name": "CHN"
    }
  ]
});
