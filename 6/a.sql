select p.* from person p
left join person as chief
on chief.id=p.chief_id
where p.wage > chief.wage;