
Sie brauchen 

* einen Computer (Windows, macOS oder Linux) 
* Zugang zum Internet
* einen Texteditor, wie z.B. [Visual Studio Code](https://code.visualstudio.com/), [Notepad++](https://notepad-plus-plus.org/), [Sublime Text](https://www.sublimetext.com/), [Atom](https://atom.io/) etc. Von klassischen Textverarbeitungsprogramme wie MS-Office oder Pages ist abzuraten. Sie haben auch die Möglichkeit, auf Online-Lösungen zurückzugreifen wie z.B. [https://www.editpad.org/](https://www.editpad.org/).
* einen Webbrowser. Aktuelle weit verbreitete Browser sind u.a. [Firefox](https://www.mozilla.org/en-US/firefox/new/), [Chrome](https://www.google.com/chrome/browser/), [Safari](https://www.apple.com/safari/), [Internet Explorer](http://windows.microsoft.com/en-us/internet-explorer/download-ie) und [Microsoft Edge](https://www.microsoft.com/en-us/windows/microsoft-edge)


# Mercedes-Benz für Developers

Mercedes Benz stellt für Kunden und Entwickler eine Plattform ([/developers](https://developer.mercedes-benz.com/)) zur Verfügung, die es erlaubt Services und Apps in eigenen Produkten zu verwenden.

## APIs

Eine Reihe von APIs werden uns von Mercedes-Benz zur Verfügung gestellt. Um eine Übersicht zu diesen APIs zu bekommen, folgen Sie bitte diesem [link](https://developer.mercedes-benz.com/apis).

Eine Voraussetzung für die Nutzung dieser APIs ist die Erstellung eines [developer accounts](). Dadurch erhalten sie einen `API-key` , den Sie zur Identifikation bereitstellen müssen. (_Für dieses Tutorial erhalten Sie ein en API-key von ihrem Trainer._)  


## Dealers API

Im Folgenden beschäftigen wir uns näher mit der [`dealers-api`](https://developer.mercedes-benz.com/apis/dealer_api).

Dieser Service dient der Information über Händler und Servicepartner.
Folgende Funktionen sind implementiert:

* Geolokalisierungsdaten
* Kontaktinformationen (Adresse, Telefonnummer, E-Mail-Adresse, Website usw.)
* Öffnungszeiten
* Angaben zu den erbrachten Dienstleistungen 

### Verwendung der Dealers API

Der Endpunkt der API lautet `https://api.mercedes-benz.com/dealer/v1`. Wie auch jede andere URL können Sie diese in die Adresszeile ihres Browsers eingeben.

> __Aufgabe:__ Geben Sie den oben genannten Endpunkt in die Adresszeile ihres Browsers ein. 
> * Was ist passiert?
> * Was müssen wir tun, um das Problem zu beheben?


#### Der `API-key`

Sie finden den API-key für das Tutorial [hier](https://etherpad.hello-world.academy/p/daimler_hr).

> __Aufgabe:__ Geben Sie den oben genannten Endpunkt zusammen mit der API-key in die Adresszeile Ihres Browsers ein.    
`https://api.mercedes-benz.com/dealer/v1/dealers?apikey=<insert_your_api_key_here>`
> * Was ist passiert?

Sie erhalten eine textbasierte Antwort, die - etwas lesbarer formatiert - wie folgt aussieht:


```
{
    "dealers": [
        {
            "dealerId": "GS0041531",
            "legalName": "Pyrénées Hèracles Industrials, S.L.",
            "brands": [
                {
                    "code": "MB",
                    "name": "Mercedes-Benz"
                }
            ],
            "geoCoordinates": {
                "latitude": 42.437023,
                "longitude": 1.475697
            },
            "address": {
                "street": "Ctra. General 1. Arenal Bordes del Cosp s/n",
                "zipCode": "AD600",
                "city": "Sant Juliá de Loria",
                "countryIsoCode": "AD"
            },
            "communicationChannels": {
                "phone": "+376880800",
                "fax": "+376880800",
                "email": "vendes.pyreneesindustrials@pyrenees.ad"
            },
            "functions": [
                {
                    "brand": {
                        "code": "MB",
                        "name": "Mercedes-Benz"
                    },
                    "productGroup": {
                        "code": "VAN",
                        "name": "Van"
                    },
                    "activity": {
                        "code": "SALES",
                        "name": "Sales"
                    }
                },
                {
                    "brand": {
                        "code": "MB",
                        "name": "Mercedes-Benz"
                    },
                    "productGroup": {
                        "code": "VAN",
                        "name": "Van"
                    },
                    "activity": {
                        "code": "SERVICE",
                        "name": "Service"
                    }
                },
                {
                    "brand": {
                        "code": "MB",
                        "name": "Mercedes-Benz"
                    },
                    "productGroup": {
                        "code": "VAN",
                        "name": "Van"
                    },
                    "activity": {
                        "code": "PARTS",
                        "name": "Parts"
                    }
                }
            ],
            "openingHours": [
                {
                    "function": {
                        "brand": {
                            "code": "MB",
                            "name": "Mercedes-Benz"
                        },
                        "productGroup": {
                            "code": "VAN",
                            "name": "Van"
                        },
                        "activity": {
                            "code": "SERVICE",
                            "name": "Service"
                        }
                    },
                    "weekdays": {
                        "WEDNESDAY": {
                            "status": "CLOSED",
                            "periods": []
                        },
                        "MONDAY": {
                            "status": "CLOSED",
                            "periods": []
                        },
                        "THURSDAY": {
                            "status": "CLOSED",
                            "periods": []
                        },
                        "SUNDAY": {
                            "status": "CLOSED",
                            "periods": []
                        },
                        "FRIDAY": {
                            "status": "CLOSED",
                            "periods": []
                        },
                        "TUESDAY": {
                            "status": "CLOSED",
                            "periods": []
                        },
                        "SATURDAY": {
                            "status": "OPEN",
                            "periods": [
                                {
                                    "from": "09:00:00",
                                    "until": "13:00:00"
                                }
                            ]
                        }
                    }
                }
            ],
            "_links": {
                "self": {
                    "href": "https://api.mercedes-benz.com/dealer/v1/dealers/GS0041531?apikey=<your_api_key>"
                }
            }
        },
        ...
    ],
    "_links": {
        "next": {
            "href": "https://api.mercedes-benz.com/dealer/v1/dealers?page=2&apikey=<your_api_key>"
        },
        "self": {
            "href": "https://api.mercedes-benz.com/dealer/v1/dealers?apikey=<your_api_key>"
        }
    }
}
```

***

_Anmerkung: Grundsätzlich können Sie diese Anfragen auch über das Kommandozeilentool [`curl`](https://de.wikipedia.org/wiki/CURL) absenden._

`curl -X GET "https://api.mercedes-benz.com/dealer/v1/dealers?apikey=<insert_your_api_key_here>"  -H "accept: application/json"` 
***


### Händler nach Standort

Händler können nach Standort lokalisiert werden, indem die Parameter `latitude` (Breitengrad) und `longitud` (Längengrad) spezifiziert werden. Zusätzlich können der Suchradius (`radiusValue`, default=10) und die Längeneinheit (`radiusUnit`, _default=KM_) definiert werden.


,

> __Aufgabe:__ Geben Sie den API-Endpunkt, den Längen- (`9.2964613`) und Breitengrad (`48.7375018`) für Esslingen zusammen mit dem API-key in die Adresszeile ihres Browsers ein.  
(_Sie können die Koordinaten mit [google maps](https://www.google.com/maps/place/48%C2%B044'15.0%22N+9%C2%B017'51.2%22E/@48.7375018,9.2964613,9) überprüfen._)   
`https://api.mercedes-benz.com/dealer/v1/dealers?latitude=48.73750183&longitude=9.2964613&apikey=<insert_your_api_key_here>`
> * Was ist passiert?

### Filtern der Händler nach Attributen

Es besteht die Möglichkeit, Händler nach Eigenschaften zu filtern. Hierzu dient der Paramater `fields`. Um nur die `dealerID`, die Anschrift (`adress` und `city`) und die Emailadresse (`email`) von Händlern anzufragen, muss der `fields` Parameter wie folgt definiert sein:

`fields=dealers(dealerId,address(street,city),communicationChannels(email))`

> __Aufgabe:__ Geben Sie den API-Endpunkt, den Längen- und Breitengrad für Esslingen sowie den Filter nach ID, Anschrift und Emailadresse zusammen mit dem API-key in die Adresszeile ihres Browsers ein.   
`https://api.mercedes-benz.com/dealer/v1/dealers?latitude=48.73750183&longitude=9.2964613&fields=dealers(dealerId,address(street,city),communicationChannels(email))&apikey=<insert_your_api_key_here>`
> * Was ist passiert?

### Anzahl der angezeigten Funde

Die Antwort kann auf eine bestimmte Anzahl von Einträgen beschränkt werden indem der Parameter `pageSize` spezifiziert wird. Der Standardwert von `pageSize` ist 50.


***


