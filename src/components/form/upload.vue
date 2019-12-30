<template>
  <div>
    <el-upload
      :action="actionUrl"
      list-type="picture-card"
      :auto-upload="true"
      multiple
      :on-success="uploadSuccess"
      :file-list="fileList">
        <i slot="default" class="el-icon-plus"></i>
        <div slot="file" slot-scope="{file}">
          <img
            class="el-upload-list__item-thumbnail"
            :src="file.url" alt=""
          >
          <span class="el-upload-list__item-actions">
            <span
              class="el-upload-list__item-preview"
              @click="handlePictureCardPreview(file)"
            >
              <i class="el-icon-zoom-in"></i>
            </span>
            <span
              v-if="!disabled"
              class="el-upload-list__item-delete"
              @click="handleRemove(file)"
            >
              <i class="el-icon-delete"></i>
            </span>
          </span>
        </div>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>

<script>
import * as _ from 'lodash'
import URL from '@config/urlConfig.js'

export default {
  name: 'upload',
  props: {
    value: {
      type: Array,
      default: () => ([])
    }
  },
  data () {
    return {
      actionUrl: URL['UPLOAD'],
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
      fileList: [],
      fileIds: []
    }
  },
  computed: {
    ids () {
      return this.fileIds.join(',')
    }
  },
  methods: {
    initFileList () {
      let fileIds = []; let fileList = []
      _.each(this.value || [], v => {
        fileIds.push(v.attid)
        fileList.push({
          id: v.attid,
          uid: v.attid,
          name: v.attrealname,
          url: `/downloadFile?filePath=${window.encodeURIComponent(v.attpath)}`
        })
      })
      this.fileIds = fileIds
      this.fileList = fileList
    },
    handleRemove (file) {
      let list = _.filter(this.fileList, v => v.uid !== file.uid)
      this.fileList = list
      let ids = _.filter(this.fileList, v => v.id !== file.id)
      this.fileIds = ids
      this.$emit('setFileList', this.ids)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    uploadSuccess (response, file, fileList) {
      if (response.code === 1) {
        let data = response.data || {}
        if (data.fileid) { // filepath
          file.id = data.fileid
          this.fileList.push(file)
          this.fileIds.push(data.fileid)
          this.$emit('setFileList', this.fileIds.ids)
        }
      }
    }
  },
  watch: {
    value () {
      this.initFileList()
    }
  }
}
</script>
