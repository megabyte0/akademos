import re
from collections import Counter
matcher=re.compile(
    re.sub(r'(?:\\\ ){2,}',lambda m:r'\s',
           re.escape(r'''<td width="120">
						of
						</td>''')
           ).replace('of','(.*?)'),
    re.M
    )
fn='words.html'
with open(fn,'rt') as fp:
    s=fp.read()
x=matcher.findall(s)
print(len(x))
matcher=re.compile((
    re.escape(r'''<a href="/how-to-use/the" target="_blank">the</a>''')
    .replace('the',r'(.*?)')
    ))
#print(
c=Counter((matcher.match(i)!=None,'<' in i) for i in x)
#)
assert all(i==j for i,j in c)
x=[(m.group(2) if (m:=matcher.match(i)) else i) for i in x]
#print(x)
with open('words.js','wt') as fp:
    fp.write('var words=%s;'%x)
