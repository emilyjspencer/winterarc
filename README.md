# Simple application to experiment with pairing Angular and C#

## Concept

Jumping on the #winterarc challenge bandwagon - this is a simple application to help set and track
goals


### Categories

* Nutrition/diet
* Fitness/movement
* Mind/mental health
* Career
* Personal development
* Connections
* Creative

### Stack

* EFC
* NUnit
* .NET
* Angular
* Tailwind
* RxJS
* Jest
* Chart.Js or ngx-charts - to visualize data
* AWS?
* Docker
* Cypress
* Specflow

Future iterations might utilization authentication and microservices.



# Seeding
```
insert into dbo.Categories (Id, Name) VALUES ('6B29FC40-CA47-1067-B31D-00DD010662DA', 'Fitness/Movement')
insert into dbo.Categories (Id, Name) VALUES ('8B29FC40-CA47-1067-B31D-00DD015662DA', 'Nutrition')
insert into dbo.Categories (Id, Name) VALUES ('9B29FC40-CA97-1067-B31D-00DD015662DA', 'Mind/Mental Health')
insert into dbo.Categories (Id, Name) VALUES ('9B24FC40-CA97-1067-B31D-00DD015662DA', 'Career')
insert into dbo.Categories (Id, Name) VALUES ('9B24FC40-BA97-1067-B31D-00DD015662DA', 'Relationships/Connections')
insert into dbo.Categories (Id, Name) VALUES ('9B64FC40-BA96-1067-B31D-00DD015662DA', 'Personal Development')
```


# Entity relationships


Many to Many

A category can be associated with many goals and many items
a goal or item could be tagged with multiple categories e.g. fitness and mental health assigned to one goal



# Notes

* Interfaces should start with an 'I'
* Put goals items onto cards
* Put items onto cards
* Put sad info into accordions
* Implement report generation
