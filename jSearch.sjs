var jsearch = require('/MarkLogic/jsearch');
var qbe=jsearch.byExample;
var sizePropRef = { by: cts.jsonPropertyReference('size') };
var myQBE={'size':"6"}

jsearch.documents()
.orderBy('size','mimetype')

//.where (qbe(myQBE))
//.where (cts.parse("taxnotes"))
/*.where (jsearch.byExample({
      "$and":[{"mimetype":'application/xhtml+xml'},{"rid":"23"}]
    }))
*/
//.where (cts.jsonPropertyWordQuery('size',['6','17']))
/*.where (cts.andQuery([
    cts.jsonPropertyWordQuery('size','6'),
    cts.directoryQuery('/lr/web/taxnotes/','infinity'),
    cts.orQuery([cts.jsonPropertyRangeQuery('size',"=",'6'),
                 cts.jsonPropertyValueQuery('size','6')]) 
    ]
   ))*/
//.slice(0,0)
.result();