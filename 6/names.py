import re
import random
tr,td=[[re.escape(j) for j in i]
    for i in [['<tr>','</tr>'],['<td>','</td>']]
    ]
##tr_td=dict(zip(
##    ['tr','td'],
##   [[re.escape(j) for j in i]
##    for i in [['<tr>','</tr>'],['<td>','</td>']]
##    ]))

matcher=re.compile(r'\s*'.join([
    tr[0],td[0],r'\d+',td[1]]+
    ([                           
    td[0],r'(.*?)',td[1],
    td[0],r'[0-9,]+',td[1],
    ]*2)+[tr[1]]),re.M)
with open('names.html','rt') as fp:
    s=fp.read()
x=matcher.findall(s)
print(len(x))
names=[j for i in x for j in i]
fields=r'''office_id
chief_id
name
wage'''.split('\n')
#сумы, харьков, кривой рог, сан франциско, бостон
'''Odessa
Prague
Warsaw
Kurgan
Moscow
Sumy
Kharkiv
Kryvyi Rih
San Francisco
Boston'''
names_=random.sample(names,100)
x=[(random.randint(1,10),
    (random.randint(1,100) if random.randint(1,10)!=10 else 'NULL'),
    "'%s'"%(names_[i]),
    random.randint(1,100))
   for i in range(100)]
with open('person.sql','wt') as fp:
    fp.write('\n'.join(
        ['insert into person (%s) values'%(
            ', '.join(fields)
            )]+['(%s),'%(
                ', '.join(str(j) for j in i)
                )
                for i in x
            ])[:-1]+';')
