# ClinPet 🐶🐺
👨‍⚕️ Appointment schedules for you pet
![node](https://user-images.githubusercontent.com/26586585/75612422-f747e380-5b01-11ea-9213-ec9742b66a47.png)

### Structure:

```
  clinic
    |_ public
        |_ coverage
        |_ postman
    |_ src
        |_ modules
            |_ Appointment
                  |_ __tests__
                        |_> Appointment.spec.ts
                  |_ controllers
                        |_> AppointmentController.ts
                  |_ dtos
                        |_> ICreateAppointmentDTO.ts
                  |_ fakes
                        |_> FakeAppointment.ts
                  |_ models
                        |_> Appointment.ts
                  |_ repositories
                        |_> IAppointmentRepository.ts
            |_ Medic
                 |_ __tests__
                 |_ controllers
                 |_ dtos
                 |_ fakes
                 |_ models
                 |_ repositories
                        
            |_ Specialty
                 |_ __tests__
                 |_ controllers
                 |_ dtos
                 |_ fakes
                 |_ models
                 |_ repositories

        |_ shared
              |_ database
                   |_> appointments.json
                   |_> medics.json
                   |_> specialtys.json
              |_> app.ts
              |_> bootstrap.ts
              |_> routes.ts
              |_> server.ts
```

### Docs:

1. PostMan ( https://documenter.getpostman.com/view/9357385/SzKZsbor )
2. PostMan Collection ( public/postman/Clinic.postman_collection.json ) 
3. docs
4. Code Coverage ( ClinPet/public/coverage/lcov-report/index.html )
5. Insominia.json

### Setting up local environment:

1. Install **Yarn**;
2. Using terminal, navigate to the folder where the project was cloned and run:<br> **git clone https://github.com/k2madureira/ClinPet.git** 
3. Using terminal, access the **ClinPet** folder and Run **yarn install**, to download all necessary dependencies;
4. Using terminal run **yarn start**, to start the server on port **3333**;
5. For testing, the **insomnia** software is recommended;
6. To perform the unit test **yarn test**

### Tests:
- [x] **Jest**
- [x] **Code coverage**

### code formatter / Extensions:

- [x] **Eslint** (Airbnb)
- [x] **Eslint** (Visual Studio Code - Extension)
- [x] **Prettier**
- [x] **EditorConfig** (Visual Studio Code - Extension)


### Endpoints:

|Number| Type | Route | Definition |
|-|------|-------|------------|
|1| *Post* | /specialty | Create an specialty |
|2| *Get* | /specialty | List all specialties |
|3| *Post* | /medic | Register new medic |
|4| *Put* | /medic/**:id** | Update an medic using **id** |
|5| *Delete* | /medic/**:id** | Delete an medic using **id** |
|6| *Post* | /appointment | Create an appointment |
|7| *Put* | /appointment/**:id** | Update an appointment using **id** |
|8| *Delete* | /appointment/**:id** | Delete an appointment using **id** |
|9| *Get* | /appointment | List all appointments |
|10| *Get* | /appointment/medic/**:id**/all | List all appointments for an medic using **id** |
|11| *Get* | /appointment/medic/**:id** | Next appointment for an medic using **id** |



#### Exemples:


1. http://localhost:3334/ or http://localhost:3334/rules **(get)**

##### Response

```
[{
  "id": 1,
  "type": "daily",
  "date": null,
  "days": [],
  "hours": [
     {
     "start": "08:00",
     "end": "10:05"
     }
  }]
 ```

 ------------------------------------------------------------

  2. http://localhost:3334/rules/daily **(post)**

 #### Conditions :
 * If **days** is empty and **date** is filled it is considered a specific rule. That is, registration of a specific day;
 * If **days** and **date** is empty, is considered a daily rule;
 * If **date** empty, is considered a weekly rule;
 * If a specific day has already been registered. A time check is performed for the addition of a new time.


 ##### req.query

```
	http://localhost:3334/rules/daily
	type: daily
	types = ['specific', 'daily', 'weekly']

 ```



 ##### Exemples req.body (JSON)

 1. Daily
```
     {
	"days": [],
	"date_start": "2020-03-05 13:00:00",
	"date_end": "2020-03-05 14:05:00"
     }
 ```

2. Weekly
```
     {
	"days": ["Sun","Mon"],
	"date_start": "2020-03-05 09:00:00",
	"date_end": "2020-03-05 10:00:00"
     }
 ```

 3. Specific
```
     {
	"days": [],
	"date_start": "2020-03-05 17:00:00",
	"date_end": "2020-03-05 18:00:00"
     }
 ```

##### Responses

1. Daily
```
   {
  	"menssage": "Successfully updated rule!",
	"update":
            [{
	      "id": 1,
	      "type": "daily",
	      "date": null,
	      "days": [],
	      "hours": [
		{
		  "start": "13:00",
		  "end": "14:05"
	    }]
    }
 ```
 2. Weekly
```
   {
  	"menssage": "Successfully updated rule!",
	"update":
            [{
	      "id": 2,
	      "type": "Weekly",
	      "date": null,
	      "days": ["Sun", "Mon"],
	      "hours": [
		{
		  "start": "09:00",
		  "end": "10:00"
	    }]
    }
 ```

 3. Specific
```
   {
  	"menssage": "Successfully updated rule!",
	"update":
            [{
	      "id": 1,
	      "type": "daily",
	      "date": "2020-03-05",
	      "days": [],
	      "hours": [
		{
		  "start": "12:40",
		  "end": "13:20"
	        },
		{
		  "start": "17:00",
		  "end": "18:00"
	        }
	    ]
    }
 ```

 ------------------------------------------------------


  3. http://localhost:3334/period **(post)**

 * This route receives two dates for the verification of the rules registered for the chosen days.


#####  req.body (JSON)

```
   {
	"since":"2019-11-01",
	"until":"2019-11-13"
   }
 ```


##### Response

```
[
  {
    "id": 2,
    "type": "specific",
    "date": "01-11-2019",
    "days": [],
    "hours": [
      {
        "start": "14:20",
        "end": "15:05"
      },
      {
        "start": "08:20",
        "end": "10:05"
      }
    ]
  },
  {
    "id": 4,
    "type": "specific",
    "date": "10-11-2019",
    "days": [],
    "hours": [
      {
        "start": "08:20",
        "end": "10:05"
      }
    ]
  },
  {
    "id": 5,
    "type": "specific",
    "date": "09-11-2019",
    "days": [],
    "hours": [
      {
        "start": "08:20",
        "end": "10:05"
      }
    ]
  }
]
 ```


 4. http://localhost:3334/rules/5 **(delete)**

##### Res

```
	true

 ```

##### req.query

```
	http://localhost:3334/rules/5
	"id": 5

 ```
