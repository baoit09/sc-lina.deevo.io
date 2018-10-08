<%layout('/layout')%> 

<style>
.title-group{
    text-align: center;
    font-size: 18px;
}
.group-1{
    width: 100%;
    display: flex;
    margin-bottom: 15px;
}

.col-3 {
    max-width: 17em;
    float: left;
    margin: auto;
    padding: 0px 3px;}

.table-responsive {
    width: 100%;
}
.search{
    width: 30%;
    float: right;
}
.btn {
    padding: 6px 20px;
}
.btn-edit{
        padding: 6px 1px;
        width: 60px;
}
textarea {
    resize: none;
}
th{

    vertical-align: middle !important;
    font-weight: normal !important;
}
.row-title{
    font-weight: bold !important;
}
.col-action{
    width: 20px;
}
</style>

<div id="page-wrapper">
    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header">ORGANIZATION</h1>
        </div>
        <!-- /.col-lg-12 -->
    </div>  
    <% if ( message && status== 1 ) { %>
        <div class="alert alert-success">
            <%= message %>
        </div>    
    <% }%>
    <% if ( message && status== 2 ) { %>
        <div class="alert alert-danger">
            <%= message %>
        </div>   
    <%} %>
    <div class="row">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    List Organization
                </div>
                <!-- /.panel-heading -->
                
                <div class="panel-body">
                        	<div class="search">
                                <form role="form" id="form-search" method="GET" action="/organization">
                                    <div class="form-group input-group">
                                        <input type="text" class="form-control" name="orgid_key" value="">
                                        <span class="input-group-btn">
                                            <button class="btn btn-default" id="btn-search" type="submit"><i class="fa fa-search"></i>
                                            </button>
                                        </span>
                                    </div>
                                </form>
                            </div>
                            <form role="form" id="form-upjson" method="POST" action="/organizations"></form>
                      		    <button type="submit" class="btn btn-info" id="btn-upload"><i class="fa fa-upload"></i> Create file with Json</button>
                            </form>
                            <button class="btn btn-primary btn-success" id="btn-addnew" data-toggle="modal" data-target="#myModal"><i class="fa fa-plus"></i> Add new</button>
                                    <!-- Modal -->
                                    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                        <form role = 'form' id="form-post" method="POST" action="/organization">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                                    <h4 class="modal-title" id="myModalLabel">Control Panel</h4>
                                                </div>
                                                <div class="modal-body">
                                                    <div class="group-1">
                                                        <div class="form-group col-3">
                                                            <label>ID</label>
                                                            <input class="form-control" name="id" value="">
                                                        </div>
                                                        <div class="form-group col-3">  
                                                            <label>Object Type</label>
                                                            <input class="form-control" name="type" value="">
                                                        </div>
                                                        <div class="form-group col-3">
                                                            <label>Parent</label>
                                                            <input class="form-control" name="parent" value="">
                                                        </div>    
                                                    </div>  
                                                    <div class="group-2">
                                                        <div class="form-group">
                                                            <label>Name</label>
                                                            <input class="form-control" name="name" value="">
                                                        </div>    
                                                        <div class="form-group">
                                                            <label>Content</label>
                                                            <textarea class="form-control" name="content"  value="" rows="3"></textarea>
                                                        </div>    
                                                    </div>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-info" data-dismiss="modal">Close</button>
                                                    <button type="submit" id="btnclick" class="btn btn-success">Save</button>
                                                </div>
                                            </div>
                                            <!-- /.modal-content -->
                                        </div>
                                        <!-- /.modal-dialog -->
                                    </form>
                                    </div>                
                    <div class="table-responsive">
                        <table class="table mytable">
                            
                            <thead>
                                <tr>
                                    <th class="row-title">ID</th>
                                    <th class="row-title">Name</th>
                                    <th class="row-title">Object Type</th>
                                    <th class="row-title">Parent</th>
                                    <th class="row-title">Content</th>
                                    <th class= "col-action row-title">Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                    <% 
                                        var rowid=1 
                                        for(var k in data ) {
                                     %>
                                        <tr class="row-<%=rowid%>">
                                            <th class="id"><%=data[k]['id']%></th>
                                            <th class="name"><%=data[k]['name']%></th>
                                            <th class="obj"><%=data[k]['objectType']%></th>
                                            <th class="parent"><%=data[k]['parent']%></th>
                                            <th class="content"><%=JSON.stringify(data[k]['content'])%></th>
                                            <th><button type="button" id="<%=rowid%>" class="btn btn-warning btn-edit"><i class="fa fa-pencil"></i> Edit</button></th> 
                                        </tr>
                                    <% rowid++}; 
                                    %> 
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
 	</div>
</div>
<script src="/bower_components/datatables/media/js/jquery.dataTables.min.js"></script>
<script src="/bower_components/datatables-plugins/integration/bootstrap/3/dataTables.bootstrap.min.js"></script>
<script>
    $('.btn-edit').click(function(){
        var id=$('.row-'+$(this).attr('id')).find('.id').text();
        var name=$('.row-'+$(this).attr('id')).find('.name').text();
        var obj=$('.row-'+$(this).attr('id')).find('.obj').text();
        var parent=$('.row-'+$(this).attr('id')).find('.parent').text();
        var content=$('.row-'+$(this).attr('id')).find('.content').text();
        $( "input[name='id']" ).val(id);
        $( "input[name='name']" ).val(name);
        $( "input[name='type']" ).val(obj);
        $( "input[name='parent']" ).val(parent);
        $( "textarea[name='content']" ).val(content);
        $("#myModal").modal();
        $('#form-post').attr('action','/organizationp');
    });

    $('#btn-upload').click(function(){
        $('#form-upjson').submit();
    });

    $('#btn-addnew').click(function(){
        $('#form-post').attr('action','/organization');
        $( "input[name='id']" ).val('');
        $( "input[name='name']" ).val('');
        $( "input[name='type']" ).val('');
        $( "input[name='parent']" ).val('');
        $( "textarea[name='content']" ).val('');
    });
</script>