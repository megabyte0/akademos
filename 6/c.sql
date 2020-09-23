select person.* from
(select chief_id,count(id) as subordinate_count
from person p
where chief_id is not null
group by chief_id
having subordinate_count = 1) c
left join person
on person.id = c.chief_id