<template>
  <el-upload
    :action="actionUrl"
    :auto-upload="true"
    :on-success="uploadSuccess"
    :file-list="fileList">
    <el-button size="small" type="primary">点击上传</el-button>
  </el-upload>
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
  mounted () {
    this.fileList = this.value || []
  },
  methods: {
    handleRemove (file) {
      let list = _.filter(this.fileList, v => v.uid !== file.uid)
      this.fileList = list
      let ids = _.filter(this.fileList, v => v.id !== file.id)
      this.fileIds = ids
    },
    uploadSuccess (response, file, fileList) {
      if (response.code === 1) {
        let data = response.data || {}
        if (data.fileid) { // filepath
          file.id = data.fileid
          this.fileList.push(file)
          this.fileIds.push(data.fileid)
          this.$emit('setFileList', this.fileIds.join(','))
        }
      }
    }
  }
}
</script>
