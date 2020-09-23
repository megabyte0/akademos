(select m1.*,branch.name as branch_name from
branch
right join
(select p1.*
from person p1 
right join
(select p.office_id,max(p.wage) as max_wage
from person p
group by office_id) m
on m.max_wage=p1.wage and m.office_id=p1.office_id) m1
on branch.id = m1.office_id)
union all
(select 
	null as id,
	null as office_id,
	null as chief_id,
	null as name,
	null as wage,
	branch.name as branch_name
	from branch
	where branch.id not in
	(select distinct office_id from person)
)