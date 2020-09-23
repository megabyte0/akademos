select branch.*,o.total_wage from
(select p.office_id,sum(p.wage) as total_wage
from person p
group by p.office_id
order by total_wage desc) o
left join branch
on branch.id = o.office_id
