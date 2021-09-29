<template>
  <div>
      <Breadcrumb activename="Permissions Management"  :previous="[{name:'Users',link:'/users'}]"></Breadcrumb>

        <div class="row">
            <div class="col-12">
                   <div class="card">
                  <div class="card-header pb-0">
                    <h5>Permissions Listing

                     <div style="float: right;">
                    <PrimaryButton icon="fas fa-plus"  label="Permission"  v-on:activemodal="openModal($event)"></PrimaryButton>
                        </div>

                    </h5>

                  <div class="mb-3 col-4 mt-3">

                        <SearchInput :apiurl="'/management/permission?page=' +this.page_num"
                        v-on:query="isquery($event)"
                        v-on:loading="loadingStart($event)"
                        v-on:reload="getpermissions()"
                        v-on:filterList="filterdata($event)"
                        label="Search Permissions"></SearchInput>
                    </div>
                  </div>

                  <div class="card-body">
                       <content-placeholders v-if="loading">
                     <content-placeholders-heading :img="true" />
                     <content-placeholders-text :lines="1" />
                     <content-placeholders-heading :img="true" />
                     <content-placeholders-text :lines="1" />
                     <content-placeholders-heading :img="true" />
                     <content-placeholders-text :lines="1" />
                     <content-placeholders-heading :img="true" />
                     <content-placeholders-text :lines="1" />
                  </content-placeholders>
                   <PermissionTable :getpermissions="getpermissions" :permissions="permissions" v-on:editItem="editItem($event)" v-on:deleteItem="deleteItem($event)" v-else></PermissionTable>
                  </div>
            </div>
        </div>
        </div>
        <vs-dialog blur   v-model="active_modal" width="50%">
         <template #header>
            <h4 class="not-margin" v-if="!edit_mode">
               Create New <b>Permission</b>
            </h4>
            <h4 class="not-margin" v-else>
               Update <b>{{permission.name}}</b> Permission
            </h4>
         </template>
         <div class="con-form">

                  <div class="mb-3">
                   <label class="col-form-label" for="recipient-name">Permission Name:</label>
                   <vs-input   :color="this.$root.primary_color" v-model="permission.name" placeholder="permission Name"  required/>
                   <span class="mt-1 text-danger" v-if="this.errors.name">{{ this.errors.name[0]}}</span>
                  </div>
               <div class="mb-3">
                <label class="col-form-label" for="recipient-name">Users:</label>
                      <vs-select  filter placeholder="Select Users"  :color="this.$root.primary_color" required   collapse-chips :multiple="true"  v-model="selected_users" v-if="users">
                      <vs-option v-for="item in users" :key="item.id"
                                :label="item.name" :value="item.id">
                                 {{ item.name }}
                        </vs-option>
                     </vs-select>

               </div>
                 <div class="mb-3">
                <label class="col-form-label" for="recipient-name">Roles:</label>
                      <vs-select  filter placeholder="Select Roles"  :color="this.$root.primary_color" required   collapse-chips :multiple="true"  v-model="selected_roles" v-if="roles">
                      <vs-option v-for="item in roles" :key="item.id"
                                :label="item.name" :value="item.id">
                                 {{ item.name }}
                        </vs-option>
                     </vs-select>

               </div>
               <div class="flex">
                  <!-- <vs-checkbox v-model="checkbox1">Remember me</vs-checkbox> -->
                  <vs-button color="rgb(121, 81, 170)" gradient  type="submit" @click="onSubmit"  v-if="!this.edit_mode">
                     Submit
                  </vs-button>
                   <vs-button  color="rgb(59,222,200)" gradient  type="submit"  @click="onSubmit" v-if="this.edit_mode">
                     Update
                  </vs-button>
               </div>

         </div>
      </vs-dialog>
  </div>

</template>

<script>
import Breadcrumb from "../../../components/BreadcrumbComponent.vue";
import PrimaryButton from "../../../components/PrimaryButton";
import PermissionTable from "./PermissionTable.vue";
import SearchInput from "../../../components/SearchInput.vue";
export default {

    components:{
        Breadcrumb,
        PermissionTable,
        PrimaryButton,
        SearchInput,
    },
     data(){
            return {
            permissions:{},
            permission:{},
            active_modal:false,
            edit_mode:false,
            selected_users:[],
            selected_roles:[],
            users:[],
            roles:[],
            errors:[],
            page_num:1,
            query:"",
            loading:false,
            }

     },
     mounted(){
       this.getpermissions();


     },
        methods:{
          onChange(event){
            console.log("log",event);
          },
            editItem(item) {
            this.resetForm();

            this.edit_mode=true;
            this.active_modal=true;
            this.permission=item;
            this.selected_users=item.users.map(x=> x.id);
            this.selected_roles=item.roles.map(x=> x.id);
            },
            deleteItem(item){
            const url=`/management/permission/${item.id}`;
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
                axios.delete(url).then((res) => {
                    Swal.fire("Deleted!", "Your file has been deleted.", "success");
                        this.getpermissions();

                  }).catch((err)=>{
                        this.$root.alertNotificationMessage(err.response.status,err.response.data);
                   //    console.log("erro",err.response.data.message);

                  });
              }
            });
            },
            openModal(val){
             this.resetForm();
             return this.active_modal=val;
            },
            resetForm(){
            this.edit_mode=false;
            this.active_modal=false;
            this.permission={};
            this.selected_users=[];
            this.selected_roles=[];

            },
           async getpermissions(page=1){
             this.loading=true;
             this.page_num=page;
             const url="/management/permission?page=" + page + "&query=" + this.query;
               await axios.get(url).then((res)=>{
                   this.permissions = res.data.permissions;
                   this.users=res.data.users;
                   this.roles=res.data.roles
                   this.loading=false;

               }).catch((err)=>{
                     this.$root.alertErrorMessage(err.response.status,err.response.data);
               });
            },
           isquery(query) {
            return (this.query = query);
          },

          filterdata(data){
            this.permissions=data.permissions;
          },
        loadingStart(value) {

            this.loading = value;
          },

            onSubmit(){
                let formData = new FormData();
                formData=Object.assign(this.permission,formData);
                formData=Object.assign({users:this.selected_users},formData)
                formData=Object.assign({roles:this.selected_users},formData)
                const url="/management/permission";
                if(!this.edit_mode){
                     axios.post(url,formData).then((res)=>{
                     this.$root.alertNotificationMessage(res.status,"New permission has been created successfully")
                     this.resetForm();
                     this.getpermissions();

                }).catch((err)=>{
                     if(err.response.status==422){
                        this.errors=err.response.data.errors;
                        return this.$root.alertNotificationMessage(err.response.status,err.response.data.errors);
                    }
                    this.$root.alertNotificationMessage(err.response.status,err.response.data);
                });
                }
                else {
                    let data={id:this.permission.id,name:this.permission.name,users:this.selected_users,roles:this.selected_roles};
                    axios.put(url+"/"+this.permission.id,data).then((res)=>{

                     this.getpermissions();
                     this.resetForm();
                    this.$root.alertNotificationMessage(res.status,"Permission has been updated successfully");

                }).catch((err)=>{
                     if(err.response.status==422){
                        this.errors=err.response.data.errors;
                        return this.$root.alertNotificationMessage(err.response.status,err.response.data.errors);
                    }
                    this.$root.alertNotificationMessage(err.response.status,err.response.data);
                });
                }

            },


    }



}
</script>
<style scoped>

  .vs-input {
   width: 100%;
   }
   .vs-select-content {
   width: 100%;
   max-width: 100%;
   }
</style>
