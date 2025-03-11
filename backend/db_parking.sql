create database parking_system_db;
use parking_system_db;

create table vehicle_log (
	id int primary key auto_increment,
    license_plate varchar (7) not null unique,
    password varchar(45) not null
);

create table car_space (
	id varchar(3) not null primary key,
    occupied boolean default false,
    vehicle_id int,
    foreign key (vehicle_id) references vehicle_log(id)
);

drop table vehicle_log;
drop table car_space;

select * from vehicle_log;

DELETE FROM vehicle_log WHERE id = 2;

insert into vehicle_log (license_plate, password) values ("ABC12D3", "teste");