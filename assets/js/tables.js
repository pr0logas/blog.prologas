var setData = './../../stories.json'

var ctableIndex = $('#stories-tableIndex').DataTable({
    bInfo: false,
    autoWidth: false,
    searching: false,
    ordering: true,
    responsive: true,
    lengthChange: true,
    processing: false,
    bPaginate: false,
    bLengthChange: false,
    pageLength: 1000,
    order: [
        [0, "desc"]
    ],
    ajax: {
        url: setData,
        dataSrc: function(json) {

             $.each(json, function(key, value) {
                var styleCatDefault = ''
                var styleSubcatDefault = ''

                if (value['category'] == 'Linux')
                    styleCatDefault = 'badge badge-success'

                if (value['subcategory'] == 'MySQL')
                    styleSubcatDefault = 'badge badge-primary'
                if (value['subcategory'] == 'AWS')
                    styleSubcatDefault = 'badge badge-warning'

                var styleBlock = 'badge badge-light'
                var styleTxid = 'badge badge-success'

                json[key]['date'] = '<span class="' + styleBlock + '">' + value['date'] + '</span>'; 
                json[key]['category'] = '<span class="' + styleCatDefault + '">' + value['category'] + '</span>';
                json[key]['subcategory'] = '<span class="' + styleSubcatDefault + '">' + value['subcategory'] + '</span>';       
                json[key]['stories'] = '<span><a href="#" onclick="newStory()">' + value['stories'] + '</a></span>';

            });

            return json;

        },
        error: function(xhr, error, thrown) {
            console.log("index table err", xhr, error, thrown);
        }

    },
    columns: [{
            data: 'date',
            width: '12%'
        },
                        {
            data: 'category',
            width: '12%'
        },
                {
            data: 'subcategory',
            width: '12%'
        },
        {
            data: 'stories',
            width: '20%'
        }
    ]
  })

setInterval(function() {
    ctableIndex.ajax.reload(null, false); // user paging is not reset on reload
}, 60000)