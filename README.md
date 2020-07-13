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
|9| *Get* | /appointment *or* / | List all appointments |
|10| *Get* | /appointment/medic/**:id**/all | List all appointments for an medic using **id** |
|11| *Get* | /appointment/medic/**:id** | Next appointment for an medic using **id** |



#### Exemples:


1. http://localhost:3333/specialty **(POST)**

##### Request [ body: JSON]
```
{
	"description": "Nutricionista"
}
```

##### Response [JSON]

```
{
  "id": "ccf1167d-df15-4281-a68c-3830626b98df",
  "description": "Nutricionista"
}
 ```

 ------------------------------------------------------------

2. http://localhost:3333/specialty **(GET)**


##### Response [JSON]

```
{
  "specialtys": [
    {
      "id": "ccf1167d-df15-4281-a68c-3830626b98df",
      "description": "Nutricionista"
    }
  ]
}
 ```

 ------------------------------------------------------------

3. http://localhost:3333/medic **(POST)**

##### Request [ body: JSON]
```
{
	"name": "EXAMPLE",
  "specialty_id":"ccf1167d-df15-4281-a68c-3830626b98df"
}
```

##### Response [JSON]

```
{
  "id": "94babbaa-2a7e-4874-815b-5ded5b5269f0",
  "name": "EXAMPLE",
  "specialty": {
    "id": "ccf1167d-df15-4281-a68c-3830626b98df",
    "description": "Nutricionista"
  }
}
 ```

 ------------------------------------------------------------


4. http://localhost:3333/medic/94babbaa-2a7e-4874-815b-5ded5b5269f0 **(PUT)**

**Fields [name, specialty_id] optional**

##### Request [ body: JSON]
```
{
	"name": "EXAMPLE UPDATED"
}
```

##### Response [JSON]

```
{
  "id": "94babbaa-2a7e-4874-815b-5ded5b5269f0",
  "name": "EXAMPLE UPDATED",
  "specialty": {
    "id": "ccf1167d-df15-4281-a68c-3830626b98df",
    "description": "Nutricionista"
  }
}
 ```

 ------------------------------------------------------------

 5. http://localhost:3333/medic/94babbaa-2a7e-4874-815b-5ded5b5269f0 **(DELETE)**

**Fields [name, specialty_id] optional**


##### Response [JSON]

```
{
  "success": "deleted"
}
 ```

 ------------------------------------------------------------

 6. http://localhost:3333/appointment **(POST)**

**Fields [name, specialty_id, species] is not optional**
##### Request [ body: JSON]
```
{
	"name": "Jhon",
  "species": "Dog",
  "breed": "",
  "urgent": false,
	"medic_id":"94babbaa-2a7e-4874-815b-5ded5b5269f0",
  "specialty_id": "ccf1167d-df15-4281-a68c-3830626b98df"
}
```

##### Response [JSON]

```
{
  "id": "c269eae4-443a-4e40-bd83-bd0426e26274",
  "name": "Jhon",
  "species": "Dog",
  "breed": "",
  "urgent": false,
  "status": "Pendente",
  "medic": {
    "id": "94babbaa-2a7e-4874-815b-5ded5b5269f0",
    "name": "EXAMPLE UPDATED",
    "specialty": {
      "id": "ccf1167d-df15-4281-a68c-3830626b98df",
      "description": "Nutricionista"
    }
  },
  "created_at": "2020-07-13T22:23:27.729Z"
}
 ```

 ------------------------------------------------------------

 7. http://localhost:3333/appointment/c269eae4-443a-4e40-bd83-bd0426e26274 **(PUT)**

**If [status === "Atendido"], this appointment gonna be deleted**
##### Request [ body: JSON]
```
{
	"name": "Jony",
	"urgent": false,
	"status": "Pendente"
}
```

##### Response [JSON]

```
{
  "id": "c269eae4-443a-4e40-bd83-bd0426e26274",
  "name": "Jony",
  "species": "Dog",
  "breed": "",
  "urgent": false,
  "status": "Pendente",
  "medic": {
    "id": "94babbaa-2a7e-4874-815b-5ded5b5269f0",
    "name": "EXAMPLE UPDATED"
  },
  "created_at": "2020-07-13T22:23:27.729Z",
  "updated_at": "2020-07-13T22:27:04.165Z"
}
 ```

 ------------------------------------------------------------

  8. http://localhost:3333/appointment/94babbaa-2a7e-4874-815b-5ded5b5269f0 **(DELETE)**


##### Response [JSON]

```
{
  "success": "deleted"
}
 ```

 ------------------------------------------------------------

 9. http://localhost:3333/appointment **(GET)**


##### Response [JSON]

```
{
  "appointments": [
    {
      "id": "c269eae4-443a-4e40-bd83-bd0426e26274",
      "name": "Jony",
      "species": "Dog",
      "breed": "",
      "urgent": false,
      "status": "Pendente",
      "medic": {
        "id": "94babbaa-2a7e-4874-815b-5ded5b5269f0",
        "name": "EXAMPLE UPDATED",
        "specialty": {
          "id": "ccf1167d-df15-4281-a68c-3830626b98df",
          "description": "Nutricionista"
        }
      },
      "created_at": "2020-07-13T22:23:27.729Z",
      "updated_at": "2020-07-13T22:27:04.165Z"
    }
  ]
}
 ```

 ------------------------------------------------------------

 10. http://localhost:3333/appointment/medic/94babbaa-2a7e-4874-815b-5ded5b5269f0/all **(GET)**


##### Response [JSON]

```
{
  "appointments": [
    {
      "id": "c269eae4-443a-4e40-bd83-bd0426e26274",
      "name": "Jony",
      "species": "Dog",
      "breed": "",
      "urgent": false,
      "status": "Pendente",
      "medic": {
        "id": "94babbaa-2a7e-4874-815b-5ded5b5269f0",
        "name": "EXAMPLE UPDATED",
        "specialty": {
          "id": "ccf1167d-df15-4281-a68c-3830626b98df",
          "description": "Nutricionista"
        }
      },
      "created_at": "2020-07-13T22:23:27.729Z",
      "updated_at": "2020-07-13T22:27:04.165Z"
    }
  ]
}
 ```

 ------------------------------------------------------------


 11. http://localhost:3333/appointment/medic/94babbaa-2a7e-4874-815b-5ded5b5269f0 **(GET)**

**Seeks the doctor's next appointment, evaluating the required specialty, urgency and the status of the animals**

##### Response [JSON]

```
{
  "appointments": [
    {
      "id": "c269eae4-443a-4e40-bd83-bd0426e26274",
      "name": "Jony",
      "species": "Dog",
      "breed": "",
      "urgent": false,
      "status": "Pendente",
      "medic": {
        "id": "94babbaa-2a7e-4874-815b-5ded5b5269f0",
        "name": "EXAMPLE UPDATED",
        "specialty": {
          "id": "ccf1167d-df15-4281-a68c-3830626b98df",
          "description": "Nutricionista"
        }
      },
      "created_at": "2020-07-13T22:23:27.729Z",
      "updated_at": "2020-07-13T22:27:04.165Z"
    }
  ]
}
 ```

 ------------------------------------------------------------