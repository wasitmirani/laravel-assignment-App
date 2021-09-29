<template>
    <div>
        <div  v-if="selected_items.length>0">
               <strong class="ml-4">Selected Items ({{selected_items.length}}) </strong>
              <vs-button icon danger :active="true" @click="alldeleteItems">
                                 Remove Items
            </vs-button>

        </div>

          <div class="table-responsive">
                        <table class="table table-bordernone">
                        <thead >
                            <tr>
                            <th scope="col">

                            <vs-checkbox   @click="selectAllItems">
                            </vs-checkbox>
                            </th>
                            <th scope="col">Title</th>
                             <th scope="col">Description</th>
                            <th scope="col">Author</th>

                            <th scope="col">Created</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr  v-if="blogs.data.length<1">
                                  <td class="py-2" colspan="6">
                                    <h1 class="text-center text-warning">blogs are not found</h1>
                                </td>
                            </tr>
                            <tr v-for="blog in blogs.data" :key="blog.id" v-else>
                                <td>
                                <vs-checkbox :val="blog.id" v-model="selected_items">
                                </vs-checkbox>
                                </td>
                                <td class="bd-t-none u-s-tb">
                                <Avatar :name="blog.title" thumbnail=""></Avatar>
                                <a  blog="button" @click="editItem(blog)">
                                <div class="align-middle image-sm-size">
                                    <div class="d-inline-block">
                                    <h6>{{blog.title}} <span class="text-muted"></span></h6>
                                    </div>
                                </div>
                                </a>
                                </td>
                                <td>
                               <small>{{blog.description}}</small> 
                                </td>
                                <td>
                                 
                                     {{blog.author.name}}
                                 
                               
                                </td>


                                <td>{{blog.created_at | timeformat}}</td>

                                <td><a  blog="button" @click="editItem(blog)"> <i class="fa  fa-edit text-primary"></i></a> |  <a blog="button"  @click="deleteItem(blog)"><i class="fa  fa-trash text-danger"></i></a></td>
                            </tr>

                        </tbody>
                        </table>
                    </div>

                    <ul class="pagination pagination-primary mt-4">
                        <pagination :data="blogs" :limit="5" @pagination-change-page="getBlogs"></pagination>
                    </ul>

    </div>
</template>

<script>
import Avatar from "../../../components/AvatarComponent.vue";

export default {
    props:['blogs','getBlogs'],
     components:{
        Avatar,
    },
    data(){ return{
        selected_items:[],
    };
    },
    methods:{
        getColor(){
            const val =Math.floor(Math.random() * 7);
      switch (val) {
          case 1:
              return "primary";
              break;
          case 2:
              return "dark";
              break;
          case 3:
              return "success";
              break;
          case 4:
              return "warn";
              break;
         case 5:
              return "#7d33ff";
              break;
          case 6:
              return "rgb(59,222,200)";
              break;
          default:
                return "primary";
              break;
      }
        },
     alldeleteItems(){
          Swal.fire({
              title: "Are you sure?",
              text: "You won't be able to revert this!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, delete it!",
            }).then((result) => {
              if (result.isConfirmed) {
                  let form_data= new FormData();
                  let ids=JSON.stringify(this.selected_items)
                  form_data.append("blogs_ids",ids);
                axios.post("/content/remove-all/blogs",form_data).then((res) => {
                    Swal.fire("Deleted!", "Your file has been deleted.", "success");
                      this.getBrands();

                  }).catch((err)=>{
                        this.$root.alertNotificationMessage(err.response.status,err.response.data);
                   //    console.log("erro",err.response.data.message);

                  });
              }
            });
     },
     selectAllItems(){

         if(this.selected_items.length>0)
         {
             this.selected_items=[];
         }
         else {
              this.selected_items=this.blogs.data.map(x=>x.id);
         }
     },
      deleteItem: function (item) {
                  return this.$emit("deleteItem", item);
            },
        editItem: function (item) {
                  return this.$emit("editItem", item);
            }


        }


}
</script>

<style>
.vs-avatar-content.btn-plane.vs-change-color-badge{
    margin-left: auto;
    position: relative;
    top: -30px;
}

</style>
