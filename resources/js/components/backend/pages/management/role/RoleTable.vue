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
                            <th scope="col">Name</th>
                             <th scope="col">Users</th>
                            <th scope="col">Permissions</th>

                            <th scope="col">Created</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr  v-if="roles.data.length<1">
                                  <td class="py-2" colspan="6">
                                    <h1 class="text-center text-warning">Roles are not found</h1>
                                </td>
                            </tr>
                            <tr v-for="role in roles.data" :key="role.id" v-else>
                                <td>
                                <vs-checkbox :val="role.id" v-model="selected_items">
                                </vs-checkbox>
                                </td>
                                <td class="bd-t-none u-s-tb">
                                <Avatar :name="role.name" :thumbnail="role.thumbnail"></Avatar>
                                <a  role="button" @click="editItem(role)">
                                <div class="align-middle image-sm-size">
                                    <div class="d-inline-block">
                                    <h6>{{role.name}} <span class="text-muted"></span></h6>
                                    </div>
                                </div>
                                </a>
                                </td>
                                <td>
                               <vs-avatar :color="getColor()">
                                    <template #text>
                                     {{role.users.length}}
                                    </template>
                                </vs-avatar>

                                </td>
                                <td>
                                      <vs-avatar :color="getColor()">
                                    <template #text>
                                     {{role.permissions.length}}
                                    </template>
                                </vs-avatar>
                                </td>


                                <td>{{role.created_at | timeformat}}</td>

                                <td><a  role="button" @click="editItem(role)"> <i class="fa  fa-edit text-primary"></i></a> |  <a role="button"  @click="deleteItem(role)"><i class="fa  fa-trash text-danger"></i></a></td>
                            </tr>

                        </tbody>
                        </table>
                    </div>

                    <ul class="pagination pagination-primary mt-4">
                        <pagination :data="roles" :limit="5" @pagination-change-page="getRoles"></pagination>
                    </ul>

    </div>
</template>

<script>
import Avatar from "../../../components/AvatarComponent.vue";

export default {
    props:['roles','getRoles'],
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
                  form_data.append("brand_ids",ids);
                axios.post("/management/remove-all/roles",form_data).then((res) => {
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
              this.selected_items=this.roles.data.map(x=>x.id);
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
