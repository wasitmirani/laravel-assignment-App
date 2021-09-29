<template>
  <div>
      <Breadcrumb activename="Roles Management"  :previous="[{name:'Users',link:'/users'}]"></Breadcrumb>

        <div class="row">
            <div class="col-12">
                   <div class="card">
                  <div class="card-header pb-0">
                    <h5>Roles

                     <div style="float: right;">
                    <PrimaryButton icon="fas fa-plus"  label="Add Role"  v-on:activemodal="openModal($event)"></PrimaryButton>
                        </div>

                    </h5>

                  <div class="mb-3 col-4 mt-3">

                        <SearchInput :apiurl="'/management/role?page=' +this.page_num"
                        v-on:query="isquery($event)"
                        v-on:loading="loadingStart($event)"
                        v-on:reload="getRoles()"
                        v-on:filterList="filterdata($event)"
                        label="Search Roles"></SearchInput>
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
                   <RoleTable :getRoles="getRoles" :roles="roles" v-on:editItem="editItem($event)" v-on:deleteItem="deleteItem($event)" v-else></RoleTable>
                  </div>
            </div>
        </div>
        </div>
        <vs-dialog blur   v-model="active_modal" width="50%">
         <template #header>
            <h4 class="not-margin" v-if="!edit_mode">
               Create New <b>Role</b>
            </h4>
            <h4 class="not-margin" v-else>
               Update <b>{{role.name}}</b> Role
            </h4>
         </template>
         <div class="con-form">

                  <div class="mb-3">
                   <label class="col-form-label" for="recipient-name">Role Name:</label>
                   <vs-input   :color="this.$root.primary_color" v-model="role.name" placeholder="Role Name"  required/>
                   <span class="mt-1 text-danger" v-if="this.errors.name">{{ this.errors.name[0]}}</span>
                  </div>
               <div class="mb-3">
                <label class="col-form-label" for="recipient-name">Users:</label>
                      <vs-select  filter placeholder="Select Users"  :color="this.$root.primary_color" required   collapse-chips :multiple="true"  v-model="selected_users" v-if="users.length > 0">
                      <vs-option v-for="item in users" :key="item.id"
                                :label="item.name" :value="item.id">
                                 {{ item.name }}
                        </vs-option>
                     </vs-select>

                    <!-- <multiselect v-model="selected_users" placeholder="Search Users" limit="" label="name" track-by="id" :options="users" :multiple="true"  :taggable="true" >
                      <span slot="noResult">Oops! No elements found. Consider changing the search query.</span>
                    </multiselect> -->
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
import RoleTable from "./RoleTable.vue";
import SearchInput from "../../../components/SearchInput.vue";
export default {

    components:{
        Breadcrumb,
        RoleTable,
        PrimaryButton,
        SearchInput,
    },
     data(){
            return {
            roles:{},
            role:{},
            active_modal:false,
            edit_mode:false,
            selected_users:[],
            users:{},
            errors:[],
            page_num:1,
            query:"",
            loading:false,
            }

     },
     mounted(){
       this.getRoles();


     },
        methods:{
          onChange(event){
            console.log("log",event);
          },
            editItem(item) {
            this.resetForm();

            this.edit_mode=true;
            this.active_modal=true;
            this.role=item;
            this.selected_users=item.users.map(x=> x.id)
            },
            deleteItem(item){
            const url=`/management/role/${item.id}`;
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
                        this.getRoles();

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
            this.role={};
            this.selected_users=[];

            },
           async getRoles(page=1){
             this.loading=true;
             this.page_num=page;
             const url="/management/role?page=" + page + "&query=" + this.query;
               await axios.get(url).then((res)=>{
                   this.roles = res.data.roles;
                   this.users=res.data.users;
                   this.loading=false;

               }).catch((err)=>{
                     this.$root.alertErrorMessage(err.response.status,err.response.data);
               });
            },
           isquery(query) {
            return (this.query = query);
          },

          filterdata(data){
            this.roles=data.roles;
          },
        loadingStart(value) {

            this.loading = value;
          },

            onSubmit(){
                let formData = new FormData();
                formData=Object.assign(this.role,formData);
                formData=Object.assign({users:this.selected_users},formData)
                const url="/management/role";
                if(!this.edit_mode){
                     axios.post(url,formData).then((res)=>{
                     this.$root.alertNotificationMessage(res.status,"New role has been created successfully")
                     this.resetForm();
                     this.getRoles();

                }).catch((err)=>{
                     if(err.response.status==422){
                        this.errors=err.response.data.errors;
                        return this.$root.alertNotificationMessage(err.response.status,err.response.data.errors);
                    }
                    this.$root.alertNotificationMessage(err.response.status,err.response.data);
                });
                }
                else {
                    let data={id:this.role.id,name:this.role.name,users:this.selected_users};
                    axios.put(url+"/"+this.role.id,data).then((res)=>{

                     this.getRoles();
                     this.resetForm();
                    this.$root.alertNotificationMessage(res.status,"Role has been updated successfully");

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
