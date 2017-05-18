--var rowlabels=["GG","FF","EE","DD","CC","BB","AA"];
--var tmap=[" LRLRLRLRLRLRLR   ","LRLRLRLRLRLRLRLRA ","LRLRLRLRLRLRLRLRAA","AALRLRLRLRLRLRLRLR","LRLRLRLRLRLRLRLRLR"," LRLRLRLRLRLRLRLR ","   AAAALRLRLRA    "];
-- var bl = tmap.map((s,si)=>s.split('').map((c,i)=>"insert into tmap values ('First Class','"+rowlabels[si]+"',"+(i+1)+",'"+c+"');").join("\n")).join("\n")
drop table booking;
drop table showing;
drop table tmap;
drop table screen;

create table screen(
id varchar(15) primary key
);
insert into screen values ('First Class');
insert into screen values ('Gold');
create table showing(
  id varchar(20) primary key,
  whn datetime,
  screen varchar(15) not null references screen(id),
  title varchar(100),
  image varchar(100),
  rating varchar(10),
  runtime int
);
insert into showing values ('a42580','2017-02-01T16:00:00.000','First Class','T2: Trainspotting','https://upload.wikimedia.org/wikipedia/en/1/1c/T2_%E2%80%93_Trainspotting_poster.jpg','18',117);
insert into showing values ('a42581','2017-02-01T19:00:00.000','First Class','T2: Trainspotting','https://upload.wikimedia.org/wikipedia/en/1/1c/T2_%E2%80%93_Trainspotting_poster.jpg','18',117);
create table tmap(
  screen varchar(15) references screen(id),
  rw varchar(2),
  cl int,
  tp varchar(1),
  primary key (screen,rw,cl)
);
insert into tmap values ('First Class','GG',1,' ');
insert into tmap values ('First Class','GG',2,'L');
insert into tmap values ('First Class','GG',3,'R');
insert into tmap values ('First Class','GG',4,'L');
insert into tmap values ('First Class','GG',5,'R');
insert into tmap values ('First Class','GG',6,'L');
insert into tmap values ('First Class','GG',7,'R');
insert into tmap values ('First Class','GG',8,'L');
insert into tmap values ('First Class','GG',9,'R');
insert into tmap values ('First Class','GG',10,'L');
insert into tmap values ('First Class','GG',11,'R');
insert into tmap values ('First Class','GG',12,'L');
insert into tmap values ('First Class','GG',13,'R');
insert into tmap values ('First Class','GG',14,'L');
insert into tmap values ('First Class','GG',15,'R');
insert into tmap values ('First Class','GG',16,' ');
insert into tmap values ('First Class','GG',17,' ');
insert into tmap values ('First Class','GG',18,' ');
insert into tmap values ('First Class','FF',1,'L');
insert into tmap values ('First Class','FF',2,'R');
insert into tmap values ('First Class','FF',3,'L');
insert into tmap values ('First Class','FF',4,'R');
insert into tmap values ('First Class','FF',5,'L');
insert into tmap values ('First Class','FF',6,'R');
insert into tmap values ('First Class','FF',7,'L');
insert into tmap values ('First Class','FF',8,'R');
insert into tmap values ('First Class','FF',9,'L');
insert into tmap values ('First Class','FF',10,'R');
insert into tmap values ('First Class','FF',11,'L');
insert into tmap values ('First Class','FF',12,'R');
insert into tmap values ('First Class','FF',13,'L');
insert into tmap values ('First Class','FF',14,'R');
insert into tmap values ('First Class','FF',15,'L');
insert into tmap values ('First Class','FF',16,'R');
insert into tmap values ('First Class','FF',17,'A');
insert into tmap values ('First Class','FF',18,' ');
insert into tmap values ('First Class','EE',1,'L');
insert into tmap values ('First Class','EE',2,'R');
insert into tmap values ('First Class','EE',3,'L');
insert into tmap values ('First Class','EE',4,'R');
insert into tmap values ('First Class','EE',5,'L');
insert into tmap values ('First Class','EE',6,'R');
insert into tmap values ('First Class','EE',7,'L');
insert into tmap values ('First Class','EE',8,'R');
insert into tmap values ('First Class','EE',9,'L');
insert into tmap values ('First Class','EE',10,'R');
insert into tmap values ('First Class','EE',11,'L');
insert into tmap values ('First Class','EE',12,'R');
insert into tmap values ('First Class','EE',13,'L');
insert into tmap values ('First Class','EE',14,'R');
insert into tmap values ('First Class','EE',15,'L');
insert into tmap values ('First Class','EE',16,'R');
insert into tmap values ('First Class','EE',17,'A');
insert into tmap values ('First Class','EE',18,'A');
insert into tmap values ('First Class','DD',1,'A');
insert into tmap values ('First Class','DD',2,'A');
insert into tmap values ('First Class','DD',3,'L');
insert into tmap values ('First Class','DD',4,'R');
insert into tmap values ('First Class','DD',5,'L');
insert into tmap values ('First Class','DD',6,'R');
insert into tmap values ('First Class','DD',7,'L');
insert into tmap values ('First Class','DD',8,'R');
insert into tmap values ('First Class','DD',9,'L');
insert into tmap values ('First Class','DD',10,'R');
insert into tmap values ('First Class','DD',11,'L');
insert into tmap values ('First Class','DD',12,'R');
insert into tmap values ('First Class','DD',13,'L');
insert into tmap values ('First Class','DD',14,'R');
insert into tmap values ('First Class','DD',15,'L');
insert into tmap values ('First Class','DD',16,'R');
insert into tmap values ('First Class','DD',17,'L');
insert into tmap values ('First Class','DD',18,'R');
insert into tmap values ('First Class','CC',1,'L');
insert into tmap values ('First Class','CC',2,'R');
insert into tmap values ('First Class','CC',3,'L');
insert into tmap values ('First Class','CC',4,'R');
insert into tmap values ('First Class','CC',5,'L');
insert into tmap values ('First Class','CC',6,'R');
insert into tmap values ('First Class','CC',7,'L');
insert into tmap values ('First Class','CC',8,'R');
insert into tmap values ('First Class','CC',9,'L');
insert into tmap values ('First Class','CC',10,'R');
insert into tmap values ('First Class','CC',11,'L');
insert into tmap values ('First Class','CC',12,'R');
insert into tmap values ('First Class','CC',13,'L');
insert into tmap values ('First Class','CC',14,'R');
insert into tmap values ('First Class','CC',15,'L');
insert into tmap values ('First Class','CC',16,'R');
insert into tmap values ('First Class','CC',17,'L');
insert into tmap values ('First Class','CC',18,'R');
insert into tmap values ('First Class','BB',1,' ');
insert into tmap values ('First Class','BB',2,'L');
insert into tmap values ('First Class','BB',3,'R');
insert into tmap values ('First Class','BB',4,'L');
insert into tmap values ('First Class','BB',5,'R');
insert into tmap values ('First Class','BB',6,'L');
insert into tmap values ('First Class','BB',7,'R');
insert into tmap values ('First Class','BB',8,'L');
insert into tmap values ('First Class','BB',9,'R');
insert into tmap values ('First Class','BB',10,'L');
insert into tmap values ('First Class','BB',11,'R');
insert into tmap values ('First Class','BB',12,'L');
insert into tmap values ('First Class','BB',13,'R');
insert into tmap values ('First Class','BB',14,'L');
insert into tmap values ('First Class','BB',15,'R');
insert into tmap values ('First Class','BB',16,'L');
insert into tmap values ('First Class','BB',17,'R');
insert into tmap values ('First Class','BB',18,' ');
insert into tmap values ('First Class','AA',1,' ');
insert into tmap values ('First Class','AA',2,' ');
insert into tmap values ('First Class','AA',3,' ');
insert into tmap values ('First Class','AA',4,'A');
insert into tmap values ('First Class','AA',5,'A');
insert into tmap values ('First Class','AA',6,'A');
insert into tmap values ('First Class','AA',7,'A');
insert into tmap values ('First Class','AA',8,'L');
insert into tmap values ('First Class','AA',9,'R');
insert into tmap values ('First Class','AA',10,'L');
insert into tmap values ('First Class','AA',11,'R');
insert into tmap values ('First Class','AA',12,'L');
insert into tmap values ('First Class','AA',13,'R');
insert into tmap values ('First Class','AA',14,'A');
insert into tmap values ('First Class','AA',15,' ');
insert into tmap values ('First Class','AA',16,' ');
insert into tmap values ('First Class','AA',17,' ');
insert into tmap values ('First Class','AA',18,' ');
create table booking(
  showing varchar(20) references showing(id),
  rw char(2),
  cl int,
  who varchar(20),
  primary key (showing,rw,cl)
);
--var umap=[" OOOOOOXXOOOOOO   ","OOOOXXXXXXOOOOOOX ","OOOOOOXXXXXXOOXXXM","XXOOOOXXXXXXOOOOOO","OOOOOOXXXXXXOOOOOO"," OOOOOOMMOOOOOOOO ","   XXXXXXXXXXX    "];
--
--console.log(umap.map((s,si)=>s.split('').map((c,i)=>(c!=='X')?"":"insert into booking values ('a42580','"+rowlabels[si]+"',"+(i+1)+",'andrew');").filter(x=>x!=='').join(" ")).join("\n"))
insert into booking values ('a42580','GG',8,'andrew'); insert into booking values ('a42580','GG',9,'andrew');
insert into booking values ('a42580','FF',5,'andrew'); insert into booking values ('a42580','FF',6,'andrew'); insert into booking values ('a42580','FF',7,'andrew'); insert into booking values ('a42580','FF',8,'andrew'); insert into booking values ('a42580','FF',9,'andrew'); insert into booking values ('a42580','FF',10,'andrew'); insert into booking values ('a42580','FF',17,'andrew');
insert into booking values ('a42580','EE',7,'andrew'); insert into booking values ('a42580','EE',8,'andrew'); insert into booking values ('a42580','EE',9,'andrew'); insert into booking values ('a42580','EE',10,'andrew'); insert into booking values ('a42580','EE',11,'andrew'); insert into booking values ('a42580','EE',12,'andrew'); insert into booking values ('a42580','EE',15,'andrew'); insert into booking values ('a42580','EE',16,'andrew'); insert into booking values ('a42580','EE',17,'andrew');
insert into booking values ('a42580','DD',1,'andrew'); insert into booking values ('a42580','DD',2,'andrew'); insert into booking values ('a42580','DD',7,'andrew'); insert into booking values ('a42580','DD',8,'andrew'); insert into booking values ('a42580','DD',9,'andrew'); insert into booking values ('a42580','DD',10,'andrew'); insert into booking values ('a42580','DD',11,'andrew'); insert into booking values ('a42580','DD',12,'andrew');
insert into booking values ('a42580','CC',7,'andrew'); insert into booking values ('a42580','CC',8,'andrew'); insert into booking values ('a42580','CC',9,'andrew'); insert into booking values ('a42580','CC',10,'andrew'); insert into booking values ('a42580','CC',11,'andrew'); insert into booking values ('a42580','CC',12,'andrew');

insert into booking values ('a42580','AA',4,'andrew'); insert into booking values ('a42580','AA',5,'andrew'); insert into booking values ('a42580','AA',6,'andrew'); insert into booking values ('a42580','AA',7,'andrew'); insert into booking values ('a42580','AA',8,'andrew'); insert into booking values ('a42580','AA',9,'andrew'); insert into booking values ('a42580','AA',10,'andrew'); insert into booking values ('a42580','AA',11,'andrew'); insert into booking values ('a42580','AA',12,'andrew'); insert into booking values ('a42580','AA',13,'andrew'); insert into booking values ('a42580','AA',14,'andrew');

